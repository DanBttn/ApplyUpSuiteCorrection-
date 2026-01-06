import { useState } from "react";

export const ApplyForm = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        alert(name)
      }}>
        <input
          name="name"
          type="text"
          placeholder="Votre nom"
          className="input"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="btn btn-success" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}