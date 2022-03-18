import "./App.css";
import Expenses from "../expenses/Expenses";
import Header from "../header/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "../addexpense/AddExpense";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Expenses />} />
          <Route path="expense/update/:id" element={<AddExpense />} />
          <Route path="expense/delete/:id" element={<Expenses />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
