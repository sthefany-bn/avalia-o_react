import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Card = styled.div`
  div {
    background-color: ${colors.secondary};
    border: 0.2rem solid ${colors.black};
    border-radius: 0.5rem;
    padding: 0.4rem;
    margin: 0.5rem;
    h3, h4 {
      margin-bottom: 0.5rem;
      color: ${colors.white};
    }
    h3 {
      font-weight: 900;
    }
    h4 {
      font-weight: 400;
    }
    div {
      display: flex;
      span {
        background-color: ${colors.secondary};
        border-radius: 0.5rem;
        padding: 0.4rem;
        margin: 0 0.4rem 0 0;
      }
    }
  }
`