import React from "react";
import { FcFilmReel } from "react-icons/fc";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <S.Cabecalho>
      <picture>
        <Link to="/">
          <FcFilmReel />
          Eventos do CEFET
        </Link>
      </picture>
      <nav>
        <ul>
          <li>
            <Link to="/cadastro">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
