import { Router } from "express";
import { validator } from "../..";
import {
  Appliance,
  applianceSchema,
  appliancesCollection,
} from "./appliancesModels";
import { authMiddleware, JwtPayload } from "../auth/jwt";

export const appliancesRoutes = Router();

appliancesRoutes.use(authMiddleware);

appliancesRoutes.get("/", async (request, response) => {
  const {userId} = (request as any).auth as JwtPayload
  console.log(`User ${userId} is fetching appliances`)
  const result = await appliancesCollection.find().toArray();
  response.json(result);
});

appliancesRoutes.post(
  "/",
  validator.body(applianceSchema),
  async (request, response) => {
    const appliance = request.body as Appliance;
    const result = await appliancesCollection.insertOne(appliance);
    response.json({ id: result.insertedId });
  },
);
