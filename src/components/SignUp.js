import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "./../assets/img/logo.svg";
import Container from "./layout/Container";

function SignUp() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    name: "",
    photo: "",
  });
  const navigate = useNavigate();

  function Signup(event) {
    event.preventDefault();
    useEffect(() => {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;
      const promise = axios.post(URL, {
        email: loginInfo.email,
        password: loginInfo.password,
        name: loginInfo.name,
        image: loginInfo.photo,
      });
      promise.then(() => navigate("/"));
      promise.catch((err) => {
        console.log(err.response.statusText);
        alert("Can't sign up");
      });
      console.log(URL)
    }, []);
  }

  return (
    <Container>
      <img src={Logo} alt="TrackIt logo" />
      <form onSubmit={Signup}>
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
        <input
          type="text"
          id="name"
          placeholder="name"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, name: e.target.value })
          }
          required
        />
        <input
          type="url"
          id="photo"
          placeholder="photo"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, photo: e.target.value })
          }
          required
        />
        <button type="submit">Sign up</button>
        <span onClick={() => navigate("/")}>
          Already have an account? Log in!
        </span>
      </form>
    </Container>
  );
}

export default SignUp;
