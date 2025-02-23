import { useState } from "react";
import { Button, Col, Row, Form, Container } from "react-bootstrap";

export default function FormCadastroCliente(props) {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [genre, setGenre] = useState("");
  const [cpfNumber, setCpfNumber] = useState("");
  const [rgNumber, setRgNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cepNumber, setCepNumber] = useState("");

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    }

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Form
      className="border mt-5 p-3"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Row className="mb-4">
        <Form.Group as={Col} md="6">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            maxLength={45}
            value={name}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ""))
            }
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Form.Label>Sexo</Form.Label>
          <Form.Select
            id="genre"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Não Informado</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="3">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            id="cpfNumber"
            name="cpfNumber"
            pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
            placeholder="000.000.000-00"
            maxLength={14}
            value={cpfNumber}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9\.-]/g, ""))
            }
            onChange={(e) => setCpfNumber(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>RG</Form.Label>
          <Form.Control
            type="text"
            id="rgNumber"
            name="rgNumber"
            maxLength={14}
            value={rgNumber}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9\.-]/g, ""))
            }
            onChange={(e) => setRgNumber(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            maxLength={15}
            value={mobileNumber}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
            }
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="text"
            id="email"
            name="email"
            pattern="^[\w\.]+@[a-zA-z]+\.[a-zA-z]{2,}$"
            value={email}
            placeholder="usuario@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="3">
          <Form.Label>Rua</Form.Label>
          <Form.Control
            type="text"
            id="street"
            name="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type="text"
            id="city"
            name="city"
            value={city}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ""))
            }
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            type="text"
            id="state"
            name="state"
            pattern="[a-zA-Z]{2}"
            maxLength={2}
            placeholder="UF"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type="text"
            id="cepNumber"
            name="cepNumber"
            pattern="[0-9]{5}-[0-9]{3}"
            maxLength={9}
            value={cepNumber}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9-]/g, ""))
            }
            onChange={(e) => setCepNumber(e.target.value)}
            placeholder="00000-000"
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Container className="d-flex gap-2">
        <Button type="clear">Limpar</Button>
        <Button type="submit">Cadastrar</Button>
      </Container>
    </Form>
  );
}
