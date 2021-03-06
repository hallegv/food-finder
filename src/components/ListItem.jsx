import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function ListItem() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="input"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />
      </Form.Group>
    </Form>
  );
}
