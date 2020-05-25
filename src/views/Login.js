import React from "react";

import { useHistory } from "react-router";

import { Container, Form, Button } from "react-bootstrap";

import { AuthContext } from "./../contexts";
import service from "./../service";

const Login = () => {
  const history = useHistory();
  const authContext = React.useContext(AuthContext);
  const [data, setData] = React.useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const response = await service.auth.login(data);

      localStorage.setItem("token", response.data.token);
      authContext.setCompany(response.data.company);

      setIsLoading(false);

      history.push("/home");
    } catch (error) {
      setIsLoading(false);
      alert(error.response.data.message);
    }
  };

  return (
    <Container>
      <p className="h1 my-4">Login</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={data.email}
            placeholder="Informe seu email"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={data.password}
            placeholder="Informe sua senha"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary" disabled={isLoading} block>
          {isLoading ? "Carregando..." : "Entrar"}
        </Button>

        <Button variant="secondary" block>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
