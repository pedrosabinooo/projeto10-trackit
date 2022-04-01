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
        <spam>Em breve você poderá ver o histórico dos seus hábitos aqui!</spam>
      </main>
      <Menu />
    </Container>
  );
}

export default History;
