import React from "react";

import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import { Form, Button } from "react-bootstrap";

import { Layout } from "./../components";

const TicketsCreate = () => {
  const history = useHistory();
  const params = useParams();
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    await axios.post(
      `http://localhost:3000/api/events/${params.id}/tickets`,
      {
        name,
        value,
      },
      { headers: { authorization: localStorage.getItem("token") } }
    );

    setIsLoading(false);

    alert("Ingresso criado com sucesso!");

    history.push(`/events/${params.id}`);
  };

  return (
    <Layout>
      <p className="h4">Cadastro de Ingressos</p>

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

        <Link
          to={`/events/${params.id}`}
          component={Button}
          variant="secondary"
          block
        >
          Cancelar
        </Link>
      </Form>
    </Layout>
  );
};

export default TicketsCreate;
