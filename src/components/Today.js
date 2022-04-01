import Container from "./layout/Container";

import Header from "./layout/Header";
import Menu from "./layout/Menu";

function Today() {
  return (
    <Container>
      <Header />
      <main>
        <div className="title">
          <span>Today</span>
        </div>
      </main>
      <Menu />
    </Container>
  );
}

export default Today;
