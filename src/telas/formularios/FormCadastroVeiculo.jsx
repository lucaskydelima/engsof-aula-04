import { useState } from "react";
import { Button, Col, Form, Row, InputGroup, Container } from "react-bootstrap";

export default function FormCadastroVeiculo() {
  const [validated, setValidated] = useState(false);

  const [licentePlate, setLicensePlate] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [yearOfManufacture, setYearOfManufacture] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [renavamNumber, setRenavamNumber] = useState("");
  const [fuelType, setFuelType] = useState("gasolina");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // show validation feedback
      setValidated(true);
    }

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Form
      className="mt-5 border p-3"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Placa</Form.Label>
          <Form.Control
            type="text"
            id="licensePlate"
            name="licensePlate"
            pattern="[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}"
            placeholder="LLLNLNN"
            maxLength={7}
            value={licentePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Modelo</Form.Label>
          <Form.Control
            type="text"
            id="vehicleModel"
            name="vehicleModel"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Marca</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              id="vehicleBrand"
              name="vehicleBrand"
              value={vehicleBrand}
              onChange={(e) => setVehicleBrand(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Campo obrigatório.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="2">
          <Form.Label>Ano de Fabricação</Form.Label>
          <Form.Control
            type="text"
            id="yearOfManufacture"
            name="yearOfManufacture"
            pattern="[0-9]{4}"
            maxLength={4}
            value={yearOfManufacture}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/\D/g, ""))
            }
            onChange={(e) => setYearOfManufacture(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Cor</Form.Label>
          <Form.Control
            type="text"
            id="vehicleColor"
            name="vehicleColor"
            value={vehicleColor}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[0-9]/, ""))
            }
            onChange={(e) => setVehicleColor(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Chassi</Form.Label>
          <Form.Control
            type="text"
            id="chassisNumber"
            name="chassisNumber"
            placeholder="00000000000"
            pattern="[0-9]{11}"
            maxLength={11}
            value={chassisNumber}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/\D/g, ""))
            }
            onChange={(e) => setChassisNumber(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Renavam</Form.Label>
          <Form.Control
            type="text"
            id="renavamNumber"
            name="renavamNumber"
            maxLength={15}
            value={renavamNumber}
            onChange={(e) => setRenavamNumber(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3">
          <Form.Label>Tipo de Combustível</Form.Label>
          <Form.Select
            id="fuelType"
            name="fuelType"
            required
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          >
            <option value="gasolina">Gasolina</option>
            <option value="etanol">Etanol</option>
            <option value="flex">Flex</option>
            <option value="diesel">Diesel</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Concordo com os termos e condições"
          feedback="Você deve concordar antes de enviar."
          feedbackType="invalid"
        />
      </Form.Group>
      <Container className="d-flex gap-2">
        <Button type="clear">Limpar</Button>
        <Button type="submit">Cadastrar</Button>
      </Container>
    </Form>
  );
}
