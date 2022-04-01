import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import Container from "./layout/Container";

import UserContext from "./../contexts/UserContext";

import Header from "./layout/Header";
import Menu from "./layout/Menu";

function Habits() {
  const { userInfo } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const [newHabit, setNewHabit] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [visible, setVisible] = useState(false);

  const weekdays = [
    { id: 0, name: "S" },
    { id: 1, name: "M" },
    { id: 2, name: "T" },
    { id: 3, name: "W" },
    { id: 4, name: "T" },
    { id: 5, name: "F" },
    { id: 6, name: "S" },
  ];

  function checkSelectedDay(day) {
    const jaSelecionado = selectedDays.some((id) => id === day);
    if (!jaSelecionado) {
      setSelectedDays([...selectedDays, day]);
    } else {
      const newSelectedDays = selectedDays.filter((id) => id !== day);
      setSelectedDays(newSelectedDays);
    }
    console.log(selectedDays);
  }

  function saveHabit(newHabit, selectedDays) {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const promise = axios.post(
      URL,
      {
        name: newHabit,
        days: selectedDays,
      },
      config
    );
    console.log(newHabit)
    promise.then(({ data }) => {
      console.log(data);
      setNewHabit("");
      setSelectedDays([]);
    });
    promise.catch((err) => {
      console.log(err.response.statusText);
    });
  }

  return (
    <Container>
      <Header />
      <main>
        <div className="title">
          <span>My habits</span>
          <button>
            <span>+</span>
          </button>
        </div>
        <NewHabit>
          <input
            type="text"
            placeholder="new habit"
            onChange={(e) => setNewHabit(e.target.value)}
          />
          <Weekday>
            {weekdays.map((day) => (
              <Day
                key={day.id}
                style={
                  selectedDays.some((id) => id === day)
                    ? {
                        color: "#FFFFFF",
                        background: "#CFCFCF",
                        border: "#CFCFCF",
                      }
                    : {
                        color: "#DBDBDB",
                        background: "#FFFFFF",
                        border: "#D4D4D4",
                      }
                }
                onClick={() => checkSelectedDay(day.id)}
              >
                {day.name}
              </Day>
            ))}
          </Weekday>
          <div className="buttons">
            <button className="cancel">Cancel</button>
            <button
              className="save"
              onClick={() => saveHabit(newHabit, selectedDays)}
            >
              Save
            </button>
          </div>
        </NewHabit>
      </main>
      <Menu />
    </Container>
  );
}

const NewHabit = styled.div`
  margin-top: 20px;
  padding: 19px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;

  input {
    width: 100%;
    height: 45px;
    padding-left: 11px;
    margin-bottom: 8px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }

  input::placeholder {
    color: #dbdbdb;
  }

  .buttons {
    display: flex;
    justify-content: end;
  }

  .cancel {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #52b6ff;
    background-color: transparent;
    border: none;
  }

  .save {
    width: 84px;
    height: 35px;
    margin-left: 23px;
    background: #52b6ff;
    border: none;
    border-radius: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #ffffff;
  }
`;

const Weekday = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 30px;
`;

const Day = styled.div`
  height: 30px;
  width: 30px;
  color: ${(props) => props.style.color};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  background-color: ${(props) => props.style.background};
  border: 1px solid ${(props) => props.style.border};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Habits;
