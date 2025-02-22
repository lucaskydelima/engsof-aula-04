import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Cadastro" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Carro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fornecedor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Peças</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Cliente</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
