import React from "react";

export default function Expense(props) {
  return (
    <>
      <tr>
          <td>{props.date}</td>
          <td>{props.type}</td>
          <td>{props.desciption}</td>
          <td>{props.amount}</td>
      </tr>
    </>
  );
}
