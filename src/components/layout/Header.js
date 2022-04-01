import styled from "styled-components";
import { useContext } from "react";

import UserContext from "./../../contexts/UserContext";

import MiniLogo from "./../../assets/img/minilogo.svg";

function Header() {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);
  return (
    <Container>
      <div className="header">
        <img src={MiniLogo} alt="Small logo" className="logo" />
        <img src={userInfo.image} alt="Profile pic" className="profile-pic" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  left: 0px;
  top: 0px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
  }

  .logo {
    width: 97px;
    height: 49px;
  }

  .profile-pic {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;

export default Header;
