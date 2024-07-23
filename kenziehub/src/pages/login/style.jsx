import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  margin-top: 77.33px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background-color: var(--Grey-3);
    width: 90%;
    height: 602px;
    max-width: 369px;
    max-height: 800px;
    border-radius: 4px;
  }
`;

export const ButtonRegisterPage = styled.button`
  background-color: var(--Grey-1);
  width: 88%;
  max-width: 330px;
  height: 48px;
  border: solid transparent;
  border-radius: 4px;
  color: var(--Grey-0);
  font-size: 16px;
  font-weight: 500;
`;
