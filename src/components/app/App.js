import "./App.css";
import Expenses from "../expenses/Expenses";
import Header from "../header/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "../addexpense/AddExpense";
import Register from "../auth/register/Register";
import Login from "../auth/login/login";
import Reset from "../auth/reset/Reset";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="expense/update/:id" element={<AddExpense />} />
          <Route path="expense/delete/:id" element={<Expenses />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
