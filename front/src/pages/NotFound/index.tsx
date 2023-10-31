import React from "react";
import { Link } from "react-router-dom";
// import * as bob from "../../assets/404-bob1.png";

export const NotFoundPage = () => {
  return (
    <>
      {/* <img src={bob} alt="Erro 404: Carro Quebrado" /> */}

      <h1>Opa! Parece que voce está perdido por aqui!</h1>
      <h2>Ainda estamos em construção por aqui</h2>
      <h2>Aqui o seu caminho de volta!</h2>
      <Link to="/">Adeus Bob!</Link>
    </>
  );
};
