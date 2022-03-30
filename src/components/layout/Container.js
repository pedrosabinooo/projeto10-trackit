import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    width: 303px;
  }

  img {
    width: 180px;
    height: 178px;
    margin-top: 70px;
    margin-bottom: 33px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 6px;
  }

  form input {
    font-family: "Lexend Deca", sans-serif;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    height: 45px;
    font-size: 20px;
    padding-left: 11px;
  }

  form input::placeholder {
      color: #DBDBDB;
  }

  form button {
    font-family: "Lexend Deca", sans-serif;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: none;
    height: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }

  form span {
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 19px;
  }
`;

export default Container;
