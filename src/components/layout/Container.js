import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  margin-top: 70px;
  margin-bottom: 70px;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;

  main {
    width: 100%;
    height:100%;
    padding: 0 18px;
  }

  .title {
    width: 100%;
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }

  .title>button {
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 34px;
text-align: center;
color: #FFFFFF;
border:none;
  }
`;

export default Container;
