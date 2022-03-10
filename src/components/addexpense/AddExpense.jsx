import React, { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";

export default function AddExpense() {
  const [items, setItems] = useState({
    date: "",
    type: "",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  };
  console.log(items);
  return (
    <>
      <Card>
        <Card.Header>Add expense to expense list</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Choose date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={items.date}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Choose expense type"></FloatingLabel>
              <Form.Select
                value={items.type}
                name="type"
                onChange={handleChange}
              >
                <option>Entertainment</option>
                <option>Rent</option>
                <option>Credit</option>
                <option>Fuel</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Describe expenses"
                style={{ height: "100px" }}
                name="description"
                value={items.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Expense sum</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                value={items.amount}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Button>Save</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
