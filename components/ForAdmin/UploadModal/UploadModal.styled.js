import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 12%;
  left: 0;
  width: calc(100% - 30px);
  margin: 0 15px;
  padding: 10% 0;
  background: rgba(230, 230, 230, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 100;

  input {
border: 2px solid;
padding: 5px;
border-radius: 10px;
cursor: pointer; 
transition: 0.3s ease;

&:hover {
  transform: scale(1.05);
  background-color: rgbA(0,0,0,0.6);
}

  }

  button {
    padding: 10px 25px;
    width: 110px;
    text-align: center;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    background: linear-gradient(135deg, #033607, #2575fc);
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, #2575fc, #033607);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;
export const Info = styled.div`
  position: relative;
  display: ${({ isLoggedIn }) => (isLoggedIn ? "none" : "block")};
  width: 300px;
  background-color: gray;
  border: 3px solid darkgray;
  border-radius: 8px;
  padding: 0 0 20px 0;
  z-index: 1000;

  animation: incrase 0.5s ease-in-out;
  @keyframes incrase {
    0% {
      transform: scale(0.2);
    }
  }
`;
