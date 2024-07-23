import styled from "styled-components";

export const ConteinerRegistro = styled.div`
  width: 100%;
  height: max-content;
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
    gap: 25px;
    background-color: var(--Grey-3);
    width: 90%;
    height: max-content;
    max-width: 369px;
    border-radius: 4px;
    margin-bottom: 40px;

    h4 {
      margin-top: 30px;
    }

    button {
      margin-bottom: 30px;
    }
  }
`;
export const ConteinerLogo = styled.div`
  display: flex;
  max-width: 369px;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
