import styled from "styled-components";

export const ButtonsContainer = styled.div`
  position: relative;
  left: 0;
  top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
  width: 100%;
  @media (min-width: 768px) {
    gap: 0px;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export const ButtonAdd = styled.button`
  padding: 10px 25px;
  width: 110px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  background: linear-gradient(135deg, rgb(230,230,230), rgb(10, 50, 10), rgb(100, 60, 20));
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(135deg,rgb(100, 60, 20), rgb(10, 50, 10),rgb(230,230,230));
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ButtonDel = styled.button`
  padding: 10px 25px;
  width: 110px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  background: linear-gradient(-135deg, rgb(230,230,230), rgb(10, 50, 10), rgb(100, 60, 20));
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(-135deg,rgb(100, 60, 20), rgb(10, 50, 10),rgb(230,230,230));
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
