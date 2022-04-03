import dayjs from "dayjs";
import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";

import UserContext from "./../contexts/UserContext";
import Done from "./../assets/img/done.svg";

import Container from "./layout/Container";
import Header from "./layout/Header";
import Menu from "./layout/Menu";

function Today() {
  const { userInfo } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

  const [renderHabitsOnce, setRenderHabitsOnce] = useState(true);
  const [habitList, setHabitList] = useState([]);

  if (renderHabitsOnce) {
    renderHabits();
    setRenderHabitsOnce(false);
  }

  function renderHabits() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
    const promise = axios.get(URL, config);
    promise.then(({ data }) => {
      setHabitList(data);
      console.log(habitList);
    });
    promise.catch((err) => console.log(err.response.statusText));
  }

  function renderHabit(habit) {
    return (
      <Habit key={habit.id}>
        <div className="habit-content">
          <h1>{habit.name}</h1>
          <span>
            Current sequence:{" "}
            <b className="done">{habit.currentSequence} days</b>
          </span>
          <span>
            Your record: <b className="done">{habit.highestSequence} days</b>
          </span>
        </div>
        <button className="done">
          {habit.done}
          <img src={Done} alt="Done/Undone" />
        </button>
      </Habit>
    );
  }

  return (
    <Container>
      <Header />
      <MainContent>
        <div className="title">{dayjs().format("dddd, MMM DD")}</div>
        <div className="subtitle done">Nenhum hábito concluído ainda</div>
        {habitList.length === 0 ? (
          <span className="noHabits">
            You don't have any habits yet. Create your own to TrackIt!
          </span>
        ) : (
          habitList.map((habit) => renderHabit(habit))
        )}
      </MainContent>
      <Menu />
    </Container>
  );
}

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  
  .subtitle{
    color: #bababa;
    margin-top: -10px;
    margin-bottom: 20px;
  }

`;

const Habit = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 94px;
  margin-top: 10px;
  padding: 19px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #666666;

  button {
    border: none;
    width: 74px;
    height: 69px;
    background: #EBEBEB;
    /* background: #8fc549; */
    border-radius: 5px;
    padding: 0;
  }

  .habit-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .habit-content > span {
    font-size: 13px;
    line-height: 16px;
  }
`;

export default Today;
