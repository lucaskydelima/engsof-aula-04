import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import { useContextoLogin } from "../../contexts/ContextLogin";

export default function FormLogin(props) {
  const usuario = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const { dadosUsuario, setDadosUsuario } = useContextoLogin();

  const verificaCredenciais = (event) => {
    if (
      usuario.current.value === "admin" &&
      password.current.value === "admin"
    ) {
      setDadosUsuario({
        usuario: usuario.current.value,
        logado: true,
      });

      navigate("/");
    } else {
      window.alert("Usuário e/ou senha inválidos!");
    }

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center flex-column gap-4"
      style={{ height: "100vh" }}
    >
      <h2>Login</h2>
      <Form onSubmit={verificaCredenciais}>
        <Form.Group className="mb-3">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="username"
            id="user"
            name="user"
            ref={usuario}
            placeholder="Digite o usuario"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            ref={password}
            placeholder="Password"
          />
        </Form.Group>

        <Container className="d-flex justify-content-center align-items-center">
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
