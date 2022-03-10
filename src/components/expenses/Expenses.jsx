import React, { useState } from "react";
import { Card, Table, Button } from "react-bootstrap";
import Expense from "../expense/Expense";
import AddExpense from "../addexpense/AddExpense";

export default function Expenses() {
    const [addExpense, setAddExpense] = useState(false);
  return (
    <>
    {(addExpense) && <AddExpense/>}
      <Card>
        <Card.Header>
          <Button className="btn btn-primary m-2" onClick={()=>setAddExpense(true)}>Add</Button>
          <Button className="btn btn-danger" onClick={()=>{setAddExpense(false)}}>Cancel</Button>
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
