import React from "react";
import { Card, Table, Button } from "react-bootstrap";
import Expense from "../expense/Expense";
import AddExpense from "../addexpense/AddExpense";

export default function Expenses() {
  return (
    <>
      <Card>
        <Card.Header>
          <Button className="btn btn-primary">Add</Button>
          <Button className="btn btn-danger">Cancel</Button>
        </Card.Header>
        <Card.Header>
          <h3>Expenses list:</h3>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Expenses list</th>
                <th>Description</th>
                <th>Sum</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
