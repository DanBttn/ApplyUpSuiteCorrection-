import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Header = () => {
  const { token, logout } = useAuth();

  return (
    <div className="flex flex-row gap-4">
      {token ? (
        <>
          <span>User connecté</span>
          <button
            onClick={logout}
            className="m-4 inline-block text-blue-500 underline"
          >
            Logout
          </button>
        </>
      ) : (
        <Link to="/" className="m-4 inline-block text-blue-500 underline">
          Login
        </Link>
      )}
      <Link to="/form" className="m-4 inline-block text-blue-500 underline">
        Formulaire
      </Link>
      <Link to="/list" className="m-4 inline-block text-blue-500 underline">
        Liste des candidatures
      </Link>
    </div>
  );
};
