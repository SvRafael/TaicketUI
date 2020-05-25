import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

export default function Cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [cpf, setCPF] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    const data = {
      name: nome,
      email: email,
      cpf: cpf,
      cnpj: cnpj,
      fantasyName: nomeFantasia,
      password: password,
    };
    console.log(data);

    axios.post("http://localhost:3000/api/auth/register", data);
  }

  return (
    <Container>
      <p className="h1 my-4 divPages">Register</p>
      <Form>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Informe o email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o CPF"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>CNPJ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o CNPJ"
            value={cnpj}
            onChange={(e) => setCNPJ(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nome Fantasia</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o nome fantasia"
            value={nomeFantasia}
            onChange={(e) => setNomeFantasia(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Informe a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="secondary" block onClick={handleSubmit}>
          Cadastrar
        </Button>

        <br></br>
      </Form>
    </Container>
  );
}
