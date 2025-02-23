import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useContextoLogin } from "../contexts/ContextLogin";

export default function Menu() {
  const { setDadosUsuario } = useContextoLogin();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="" as={Link} to={"/"}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastro" id="basic-nav-dropdown">
              <NavDropdown.Item href="" as={Link} to={"/veiculo"}>
                Veículo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" as={Link} to={"/cliente"}>
                Cliente
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => {
                setDadosUsuario({ usuario: "", logado: false });
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
