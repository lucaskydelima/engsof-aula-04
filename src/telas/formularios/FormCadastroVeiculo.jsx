import { useState } from "react";
import { Button, Col, Form, Row, InputGroup, Container } from "react-bootstrap";

import { fuelData } from "../../data/FuelData";
import { brandData } from "../../data/BrandData";
import { useContextoVeiculo } from "../../contexts/ContextVeiculo";

export default function FormCadastroVeiculo(props) {
  const [validated, setValidated] = useState(false);
  const {
    vehicleList,
    setVehicleList,
    vehicle,
    setVehicle,
    editedVehicle,
    resetVehicle,
  } = useContextoVeiculo();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    if (props.editMode) {
      const index = vehicleList.findIndex(
        (vehicle) => vehicle.licensePlate === editedVehicle.licensePlate
      );
      const data = vehicleList;
      data[index] = vehicle;
      setVehicleList(data);
    } else {
      setVehicleList([...vehicleList, vehicle]);
    }
    props.setViewMode(true);
    props.setEditMode(false);
    resetVehicle();
  };

  const updateVehicle = (event) => {
    const data = { ...vehicle, [event.target.id]: event.target.value };
    setVehicle(data);
  };

  const updateOptions = (event) => {
    let id;
    if (event.target.name === "fuelType") {
      id = fuelData.find(
        (fuelType) => fuelType.name === event.target.value
      )?.id;
    } else if (event.target.name === "vehicleBrand") {
      id = brandData.find((brand) => brand.name === event.target.value)?.id;
    }

    const data = {
      ...vehicle,
      [event.target.name]: { id: id, name: event.target.value },
    };

    setVehicle(data);
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
            value={vehicle.licensePlate}
            onChange={updateVehicle}
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
            value={vehicle.vehicleModel}
            onChange={updateVehicle}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Marca</Form.Label>
          <InputGroup hasValidation>
            <Form.Select
              type="text"
              id="vehicleBrand"
              name="vehicleBrand"
              value={vehicle.vehicleBrand.name}
              onChange={updateOptions}
              required
            >
              <option value="" disabled>
                Selecione
              </option>
              {brandData?.map((brand) => (
                <option key={brand.id} value={brand.name}>
                  {brand.name}
                </option>
              ))}
            </Form.Select>
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
            value={vehicle.yearOfManufacture}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/\D/g, ""))
            }
            onChange={updateVehicle}
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
            value={vehicle.vehicleColor}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[0-9]/, ""))
            }
            onChange={updateVehicle}
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
            value={vehicle.chassisNumber}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/\D/g, ""))
            }
            onChange={updateVehicle}
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
            value={vehicle.renavamNumber}
            onChange={updateVehicle}
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
            value={vehicle.fuelType.name}
            onChange={updateOptions}
          >
            <option value="" disabled>
              Selecione
            </option>
            {fuelData?.map((fuel) => (
              <option key={fuel.id} value={fuel.name}>
                {fuel.name}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Campo Obrigatório.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Container className="d-flex gap-2 mt-4">
        <Button type="button" onClick={() => props.setViewMode(true)}>
          Voltar
        </Button>
        <Button type="submit">{props.editMode ? "Atualizar" : "Salvar"}</Button>
      </Container>
    </Form>
  );
}
