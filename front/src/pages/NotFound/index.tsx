import React from "react";
import { Link } from "react-router-dom";
import * as Bob from "../../assets/404-bob1.png";

export const NotFoundPage = () => {
  return (
    <>
      <div>
        <img src={Bob} alt="Erro 404: Carro Quebrado" />
      </div>
      <h1>Opa! Parece que voce está perdido por aqui!</h1>
      <h2>Ainda estamos em construção por aqui</h2>
      <h2>Aqui o seu caminho de volta!</h2>
      <Link to="/">Adeus Bob!</Link>
    </>
  );
};
