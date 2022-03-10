import React from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";

export default function AddExpense() {
  return (
    <>
      <Card>
        <Card.Header>Add expense to expense list</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Choose date</Form.Label>
              <Form.Control type="date" name="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Choose expense type"></FloatingLabel>
              <Form.Select>
                  <option>Entertainment</option>
                  <option>Rent</option>
                  <option>Credit</option>
                  <option>Fuel</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" placeholder="Describe expenses" style={{height:'100px'}} name="description" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Expense sum</Form.Label>
                <Form.Control type="text" name="amount"></Form.Control>
            </Form.Group>
            <Button>Save</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
