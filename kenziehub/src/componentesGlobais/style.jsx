import styled from "styled-components";

export const Logo = styled.h3`
  color: var(--Color-primary);
  font-size: 24px;
  font-weight: 800;
`;
export const Input = styled.input`
  width: 85%;
  max-width: 330px;
  height: 48px;
  background-color: var(--Grey-2);
  border: solid transparent;
  border-radius: 4px;
  color: var(--Grey-0);
`;
export const ButtonSubmit = styled.button`
  background-color: var(--Color-primary-Negative);
  width: 88%;
  max-width: 330px;
  height: 48px;
  border: solid transparent;
  border-radius: 4px;
  color: var(--Grey-0);
  font-size: 16px;
  font-weight: 500;
  :hover {
    transition: 0.5s;
    background-color: var(--Color-primary);
  }
`;

export const SpanRedirecionar = styled.span`
  color: var(--Grey-1);
  font-weight: 600;
  font-size: 10px;
`;
export const SpanDescriInput = styled.span`
  position: relative;
  right: 39%;
  color: var(--Grey-0);
  font-size: 10px;
  font-weight: 400;
`;

export const DescriForm = styled.h4`
  font-size: 14.5px;
  font-weight: 700;
  color: var(--Grey-0);
`;
export const SelectModulo = styled.select`
  width: 85%;
  max-width: 330px;
  height: 48px;
  background-color: var(--Grey-2);
  border: solid transparent;
  border-radius: 4px;
  color: var(--Grey-0);
`;
export const BtnVoltar = styled.button`
  width: max-content;
  background-color: var(--Grey-3);
  color: var(--Grey-0);
  height: 40.11px;
  border-radius: 4px;
  border: solid transparent;
  font-size: 12px;
  font-weight: 600;
`;
export const StyledParag = styled.p`
  font-size: 10px;
  color: var(--Grey-0);
`;
