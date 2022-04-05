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
     id: null,
     name: "",
     image: "",
     email: "",
     password: "",
     token: "",
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
