import React, { useEffect } from "react";
import Expense from "../expense/Expense";
import { Table } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import * as service from "../../services/expensesServices";
import * as services from "../../services/expensesServices";

export default function ExpensesTable(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    id && services.deleteExpense(id);
    navigate("/expenses");
  }, [id]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Expenses list</th>
            <th>Description</th>
            <th>Sum</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data.lenght && props.data.map((expense, i) => {
            return (
              <Expense
                key={i}
                id={expense.id}
                date={expense.date}
                type={expense.type}
                description={expense.description}
                amount={expense.amount}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
