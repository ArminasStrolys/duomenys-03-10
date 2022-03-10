import "./App.css";
import Expenses from "../expenses/Expenses";
import Header from "../header/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <Expenses />
    </Container>
  );
}

export default App;
