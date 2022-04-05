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
  const [doneHabits, setDoneHabits] = useState([]);

  habitList.forEach((habit) => {
    if (habit.done===true && !doneHabits.includes(habit.id)) doneHabits.push(habit.id);
  });
  
  if (renderHabitsOnce) {
    renderHabits();
    setRenderHabitsOnce(false);
  }
  console.log(doneHabits)
  function renderHabits() {
    console.log("renderHabits")
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
    const promise = axios.get(URL, config);
    promise.then(({ data }) => {
      setHabitList([...data]);
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
            <b
              style={
                doneHabits.some((id) => id === habit.id)
                  ? { color: "#8fc549" }
                  : { color: "#666666" }
              }
            >
              {habit.currentSequence} days
            </b>
          </span>
          <span>
            Your record:{" "}
            <b
              style={
                habit.currentSequence === habit.highestSequence &&
                doneHabits.some((id) => id === habit.id)
                  ? { color: "#8fc549" }
                  : { color: "#666666" }
              }
            >
              {habit.highestSequence} days
            </b>
          </span>
        </div>
        <button
          style={
            doneHabits.some((id) => id === habit.id)
              ? { background: "#8fc549" }
              : { background: "#EBEBEB" }
          }
          onClick={() => checkHabit(habit)}
        >
          <img src={Done} alt="Done/Undone" />
        </button>
      </Habit>
    );
  }

  function checkHabit(habit) {
    console.log("checkHabit")
    const type = habit.done === true ? "uncheck" : "check";
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${type}`;
    const promise = axios.post(URL, null, config);
    promise.then(() => {
      if (!doneHabits.includes(habit.id)) {
        doneHabits.push(habit.id)
        setDoneHabits([...new Set(doneHabits)]);
        console.log("Habit done!");
        console.log(type)
      } else {
        const newDoneHabits = doneHabits.filter((id) => id !== habit.id);
        setDoneHabits([...new Set(newDoneHabits)]);
        console.log("Habit undone!");
        console.log(type)
      }
      renderHabits();
    });
    promise.catch((err) => console.log(err.response.statusText));
  }

  return (
    <Container>
      <Header />
      <MainContent>
        <div className="title">{dayjs().format("dddd, MMM DD")}</div>
        {doneHabits.length === 0 && habitList.length !== 0 ? (
          <span className="subtitle">
            You don't have any concluded habits yet.
          </span>
        ) : (
          <span className="subtitle done">
            {((100 * doneHabits.length) / habitList.length).toFixed(0)}%
            concluded habits today.
          </span>
        )}
        {habitList.length === 0 ? (
          <span className="subtitle">
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

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  .subtitle {
    color: #bababa;
    margin-top: -10px;
    margin-bottom: 20px;
  }

  .done{
    color: #8fc549;
  }
`;

export default Today;
