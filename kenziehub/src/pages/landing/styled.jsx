import styled from "styled-components";

export const HeaderDashboard = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ConteinerDashboar = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const ConteinerUserInfo = styled.div`
  width: 100%;
  height: 117px;
  border-top: 1px solid var(--Grey-3);
  border-bottom: 1px solid var(--Grey-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  h2 {
    position: relative;
    left: 12px;
    width: max-content;
  }
  span {
    position: relative;
    left: 12px;
    width: max-content;
  }
`;
export const Tittle1 = styled.h2`
  font-weight: 700;
  font-style: 18px;
  color: var(--Grey-0);
`;
