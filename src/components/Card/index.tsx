import React from "react";
import { ICard } from "interfaces/card.interface";

import * as S from "./styles";

const Card = ({ dados }: ICard) => {
  return (
    <S.Card>
      {dados && (
        <div key={dados.id}>
          <h3>
            <>
              {dados.lugar}: 
              <h4>{dados.data}</h4>
            </>
          </h3>
          <h3>
            <>
              Evento:
              <h4>{dados.evento}</h4> 
            </>
          </h3>
          <h3>
            <>
              Descrição: 
              <h4>{dados.descricao}</h4>
            </>
          </h3>
        </div>
      )}
    </S.Card>
  );
};

export default Card;
