import React from "react";

import { Container, Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <p className="h1 my-4">Register</p>

      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Informe seu email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Informe sua senha" />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Entrar
        </Button>

        <Button variant="secondary" block>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Register;