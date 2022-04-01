import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./../contexts/UserContext";

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";

function App() {
  const [userInfo, setUserInfo] = useState({
    // id: null,
    // name: "",
    // image: "",
    // email: "",
    // password: "",
    // token: "",
    email: "pedro@driven.com.br",
    id: 2007,
    image:
      "https://image.shutterstock.com/image-vector/web-developer-design-vector-illustration-260nw-314602454.jpg",
    name: "Pedro",
    password: "123",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAwNywiaWF0IjoxNjQ4NzYxOTkyfQ.ExxNDDK_SizujD6bzSvsi9GX9w7GuarlJUe76642uuc",
  });
  // console.log(userInfo);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/today" element={<Today />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
