import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Utilisateur = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Bienvenue, {user.name} !</p>
          <button onClick={logout}>Déconnexion</button>
        </div>
      ) : (
        <button
          onClick={() =>
            login({ name: "Mandionka" }, "token-demo-123")
          }
        >
          Connexion
        </button>
      )}
    </div>
  );
};

export default Utilisateur;






