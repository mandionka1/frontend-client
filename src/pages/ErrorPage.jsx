// pages/ErrorPage.jsx
import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // cas d’une “Response” levée dans loader/action (ex : throw new Response(...))
    return (
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">{error.status}</h1>
        <p className="mt-4">{error.statusText || "Page non trouvée"}</p>
      </div>
    );
  } else {
    // erreur “normale”
    return (
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">Erreur inattendue</h1>
        <p className="mt-4">{error.message || "Quelque chose s’est mal passé."}</p>
      </div>
    );
  }
}
