import React from "react";

import * as S from "./styles";
import { ButtonComponent } from "components";

const Cadastro = () => {
  return (
    <S.Section>
      <h1>Registre o evento do CEFET-MG</h1>
      <form action="" method="post">
        <div>
          <label htmlFor="nome">Local: </label>
          <input type="text" name="local" id="local" required />
        </div>
        <div>
          <label htmlFor="evento">Evento: </label>
          <input type="text" name="evento" id="evento" required />
        </div>
        <div>
          <label htmlFor="desc">Descrição: </label>
          <textarea name="descricao" id="desc"></textarea>
        </div>
        <p>
          <ButtonComponent>Enviar</ButtonComponent>
        </p>
      </form>
    </S.Section>
  );
};

export default Cadastro;
