import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "./../contexts/UserContext";

import Logo from "./../assets/img/logo.svg";
import Container from "./layout/Container";

function LogIn() {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const { setUserInfo } = useContext(UserContext);

  function login(event) {
    event.preventDefault();
    useEffect(() => {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
      const promise = axios.post(URL, {
        email: loginInfo.email,
        password: loginInfo.password,
      });
      promise.then(({ data }) => {
        setUserInfo({
          id: data.id,
          name: data.name,
          image: data.image,
          email: data.email,
          password: data.password,
          token: data.token,
        });
        console.log(data);
        navigate("/today");
      });
      promise.catch((err) => {
        console.log(err.response.statusText)
        alert("Can't sign in to your account. Check your email/password.")
      });
    }, []);
  }

  return (
    <Container>
      <img src={Logo} alt="TrackIt logo" />
      <form onSubmit={login}>
        <input
          type="email"
          id="email"
          placeholder="email"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
          required
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
          required
        />
        <button type="submit">Log in</button>
        <span onClick={() => navigate("/signup")}>
          Don't have an account? Sign up!
        </span>
      </form>
    </Container>
  );
}

export default LogIn;
