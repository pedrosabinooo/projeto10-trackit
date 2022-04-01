import styled from "styled-components";

import Container from "./layout/Container";

import Header from "./layout/Header";
import Menu from "./layout/Menu";

function History() {
  return (
    <Container>
      <Header />
      <main>
        <div className="title">
          <span>History</span>
        </div>
        <HistoryDiv>
          <spam>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
          </spam>
        </HistoryDiv>
      </main>
      <Menu />
    </Container>
  );
}

const HistoryDiv = styled.div`
margin-top: 17px;
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
`;

export default History;
