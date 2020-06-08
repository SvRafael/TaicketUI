import React from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import { Form, Button } from "react-bootstrap";
import { Layout } from "./../components";

export default function Cadastrar() {
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [initialDate, setInitialDate] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const data = {
      name: name,
      initialDate: initialDate,
      state: state,
      city: city,
      street: street,
      number: number,
      company: company,
    };

    await axios.post("http://localhost:3000/api/events", data, {
      headers: { authorization: localStorage.getItem("token") },
    });

    setIsLoading(false);

    alert("Evento criado com sucesso!");
    history.push("/home");
  };

  return (
    <Layout>
      <p className="h1 my-4 divPages">Cadastro de Eventos</p>
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
          <Form.Label>Data de Inicio</Form.Label>
          <Form.Control
            type="date"
            placeholder="Informe a data de inicio"
            value={initialDate}
            onChange={(e) => setInitialDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Estado</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o estado"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe a cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rua</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe a rua"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Número</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o número"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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
          {isLoading ? "Carregando..." : "Criar Evento"}
        </Button>

        <Link to="/ticket" className="text-decoration-none">
          <Button variant="secondary" className="mb-2" block>
            Criar Ingresso
          </Button>
        </Link>
      </Form>
    </Layout>
  );
}
