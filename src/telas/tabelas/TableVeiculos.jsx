import { Table, Button, Container } from "react-bootstrap";
import { useEffect } from "react";

import { useContextoVeiculo } from "../../contexts/ContextVeiculo";
import vehicleService from "../../services/vehicleServices";

export default function TableVeiculos(props) {
  const {
    vehicleList,
    setVehicleList,
    setVehicle,
    setEditedVehicle,
    resetVehicle,
  } = useContextoVeiculo();

  useEffect(() => {
    vehicleService.getAll().then((data) => setVehicleList(data.vehicles));
  }, [setVehicleList]);

  const handleRemoveVehicle = async (event) => {
    const id = event.target.id;
    const vehicleToRemove = vehicleList.find(
      (vehicle) => vehicle.id.toString() === id
    );

    const updatedList = vehicleList.filter(
      (vehicle) => vehicle.id.toString() !== id
    );

    const data = await vehicleService.delete(vehicleToRemove);
    if (data.status) {
      setVehicleList(updatedList);
    }
    alert(data.message);
  };

  const handleEditVehicle = (event) => {
    const vehicleToEdit = vehicleList.find(
      (vehicle) => vehicle.id.toString() === event.target.id
    );

    setEditedVehicle(vehicleToEdit);
    setVehicle(vehicleToEdit);
    props.setViewMode(false);
    props.setEditMode(true);
  };

  const handleRegister = () => {
    props.setViewMode(false);
    props.setEditMode(false);
    resetVehicle();
  };

  return (
    <>
      <Button variant="primary" className="mt-4" onClick={handleRegister}>
        Cadastrar
      </Button>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Ano</th>
            <th>Cor</th>
            <th>Chassis</th>
            <th>Renavam</th>
            <th>Combustível</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vehicleList?.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.plate}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.brand.name}</td>
              <td>{vehicle.yearOf}</td>
              <td>{vehicle.color}</td>
              <td>{vehicle.chassis}</td>
              <td>{vehicle.renavam}</td>
              <td>{vehicle.fuel.name}</td>

              <td>
                <Container className="d-flex gap-3">
                  <Button
                    variant="warning"
                    onClick={handleEditVehicle}
                    id={vehicle.id}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={handleRemoveVehicle}
                    id={vehicle.id}
                  >
                    Excluir
                  </Button>
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
