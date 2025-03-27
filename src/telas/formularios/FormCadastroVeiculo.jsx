import { useEffect, useState } from "react";
import { Button, Col, Form, Row, InputGroup, Container } from "react-bootstrap";

import { useContextoVeiculo } from "../../contexts/ContextVeiculo";
import fuelService from "../../services/fuelService";
import brandService from "../../services/brandService";
import vehicleService from "../../services/vehicleServices";

export default function FormCadastroVeiculo(props) {
  const [validated, setValidated] = useState(false);
  const [fuels, setFuels] = useState([]);
  const [brands, setBrands] = useState([]);

  const {
    vehicleList,
    setVehicleList,
    vehicle,
    setVehicle,
    editedVehicle,
    resetVehicle,
  } = useContextoVeiculo();

  useEffect(() => {
    fuelService.getAll().then((data) => setFuels(data.fuels));
    brandService.getAll().then((data) => setBrands(data.brands));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    if (!props.editMode) {
      const res = await vehicleService.post(vehicle);
      if (res.status) {
        alert("Add successfully!");
        setVehicleList([...vehicleList, vehicle]);
      } else {
        alert(res.message);
      }
      props.setViewMode(true);
      props.setEditMode(false);
      resetVehicle();
    } else {
      const index = vehicleList.findIndex(
        (vehicle) => vehicle.id === editedVehicle.id
      );
      const data = vehicleList;
      data[index] = vehicle;

      const res = await vehicleService.put(vehicle);
      if (res.message) {
        alert("Update successfully!");
        setVehicleList(data);
      } else {
        alert(res.message);
      }
      props.setViewMode(true);
      props.setEditMode(false);
      resetVehicle();
    }
  };

  const updateVehicle = (event) => {
    const data = { ...vehicle, [event.target.id]: event.target.value };
    setVehicle(data);
  };

  const updateOptions = (event) => {
    let id;
    if (event.target.id === "brand") {
      id = brands.find((brand) => (brand.name === event.target.value))?.id;
    } else if (event.target.id === "fuel") {
      id = fuels.find((fuel) => fuel.name === event.target.value)?.id;
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
            id="plate"
            name="plate"
            pattern="[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}"
            placeholder="LLLNLNN"
            maxLength={7}
            value={vehicle.plate}
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
            id="model"
            name="model"
            value={vehicle.model}
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
              id="brand"
              name="brand"
              value={vehicle.brand.name}
              onChange={updateOptions}
              required
            >
              <option value="" disabled>
                Selecione
              </option>
              {brands?.map((brand) => (
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
            id="yearOf"
            name="yearOf"
            pattern="[0-9]{4}"
            maxLength={4}
            value={vehicle.yearOf}
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
            id="color"
            name="color"
            value={vehicle.color}
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
            id="chassis"
            name="chassis"
            placeholder="00000000000"
            pattern="[0-9]{11}"
            maxLength={11}
            value={vehicle.chassis}
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
            id="renavam"
            name="renavam"
            maxLength={15}
            value={vehicle.renavam}
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
            id="fuel"
            name="fuel"
            required
            value={vehicle.fuel.name}
            onChange={updateOptions}
          >
            <option value="" disabled>
              Selecione
            </option>
            {fuels?.map((fuel) => (
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
