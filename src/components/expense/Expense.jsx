import React from "react";
import { Link } from "react-router-dom";

export default function Expense(props) {
  return (
    <>
      <tr>
          <td>{props.date}</td>
          <td>{props.type}</td>
          <td>{props.description}</td>
          <td>{Number.parseFloat(props.amount).toFixed(2)}</td>
          <td><Link key={props.id} to={`expense/update/${props.id}`}>Edit</Link></td>
      </tr>
    </>
  );
}
