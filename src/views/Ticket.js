import React from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import { Container, Form, Button } from "react-bootstrap";

export default function Cadastrar() {
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");
  const [event, setEvent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const data = {
      name: name,
      value: value,
      event: event,
    };

    await axios.post("http://localhost:3000/api/events/:id/ticket", data);

    setIsLoading(false);

    alert("Ingresso criado com sucesso!");
    history.push("/home");
  };

  return (
    <Container>
      <p className="h1 my-4 divPages">Cadastro de Ingressos</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

      
        <Form.Group>
          <Form.Label>Preço</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o preço"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          className="mb-2"
          disabled={isLoading}
          block
        >
          {isLoading ? "Carregando..." : "Criar Ingresso"}
        </Button>

        {/* <Link to="/login" className="text-decoration-none">
          <Button variant="secondary" className="mb-2" block>
            Criar Ingresso
          </Button>
        </Link> */}
      </Form>
    </Container>
  );
}
