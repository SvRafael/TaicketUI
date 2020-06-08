import React from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import { Container, Form, Button } from "react-bootstrap";

export default function Cadastrar() {
  const history = useHistory();
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cnpj, setCNPJ] = React.useState("");
  const [cpf, setCPF] = React.useState("");
  const [nomeFantasia, setNomeFantasia] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const data = {
      name: nome,
      email: email,
      cpf: cpf,
      cnpj: cnpj,
      fantasyName: nomeFantasia,
      password: password,
    };

    await axios.post("http://localhost:3000/api/auth/register", data);

    setIsLoading(false);

    alert("Cadastrado com sucesso!");
    history.push("/login");
  };

  return (
    <Container>
      <p className="h1 my-4">Register</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Informe o email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o CPF"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>CNPJ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o CNPJ"
            value={cnpj}
            onChange={(e) => setCNPJ(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nome Fantasia</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o nome fantasia"
            value={nomeFantasia}
            onChange={(e) => setNomeFantasia(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Informe a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          {isLoading ? "Carregando..." : "Cadastrar"}
        </Button>

        <Link to="/login" className="text-decoration-none">
          <Button variant="secondary" className="mb-2" block>
            Login
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
