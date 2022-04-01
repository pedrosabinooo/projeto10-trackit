import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <Container>
      <div onClick={() => navigate("/habits")}>
        <span>Habits</span>
      </div>
      <button onClick={() => navigate("/today")}>
        <span>Today</span>
      </button>
      <div onClick={() => navigate("/history")}>
        <span>History</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  bottom: 0px;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 60px;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }

  button {
    position: absolute;
    bottom: 0px;
    background-color: #52b6ff;
    width: 91px;
    height: 91px;
    border-radius: 98.5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  button span {
    color: #ffffff;
  }

  div {
    min-width: 157px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Menu;
