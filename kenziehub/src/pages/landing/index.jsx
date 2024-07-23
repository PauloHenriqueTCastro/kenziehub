import {
  Logo,
  BtnVoltar,
  SpanRedirecionar,
} from "../../componentesGlobais/style";
import {
  HeaderDashboard,
  ConteinerDashboar,
  ConteinerUserInfo,
  Tittle1,
} from "./styled";

export const LandingPage = () => {
  return (
    <ConteinerDashboar>
      <HeaderDashboard>
        <Logo>Kenzie Hub</Logo>
        <BtnVoltar>Sair</BtnVoltar>
      </HeaderDashboard>
      <ConteinerUserInfo>
        <Tittle1>Olá, Samuel Leão</Tittle1>
        <SpanRedirecionar>
          Primeiro módulo (Introdução ao Frontend)
        </SpanRedirecionar>
      </ConteinerUserInfo>
    </ConteinerDashboar>
  );
};
