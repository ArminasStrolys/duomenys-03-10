import React from 'react'
import Expense from '../expense/Expense'
import { Table } from 'react-bootstrap'

export default function ExpensesTable(props) {
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
              {props.data.map((expense, i) => {
                  return(
                <Expense
                  key={i}
                  id={expense.id}
                  date={expense.date}
                  type={expense.type}
                  description={expense.description}
                  amount={expense.amount}
                />
                )
              })}
            </tbody>
          </Table>
          </>
  )
}
