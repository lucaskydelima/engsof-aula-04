import { Table, Button, Container } from "react-bootstrap";

import { useContextoVeiculo } from "../../contexts/ContextVeiculo";

export default function TableVeiculos(props) {
  const {
    vehicleList,
    setVehicleList,
    setVehicle,
    setEditedVehicle,
    resetVehicle,
  } = useContextoVeiculo();

  const handleRemoveVehicle = (event) => {
    const chassisNumber = event.target.id;
    const data = vehicleList.filter(
      (vehicle) => vehicle.chassisNumber !== chassisNumber
    );

    setVehicleList(data);
  };

  const handleEditVehicle = (event) => {
    const data = vehicleList.find(
      (vehicle) => vehicle.chassisNumber === event.target.id
    );

    setEditedVehicle(data);
    setVehicle(data);
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
            <th>Combustível</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vehicleList?.map((vehicle) => (
            <tr key={vehicle.chassisNumber}>
              <td>{vehicle.licensePlate}</td>
              <td>{vehicle.vehicleModel}</td>
              <td>{vehicle.vehicleBrand.name}</td>
              <td>{vehicle.yearOfManufacture}</td>
              <td>{vehicle.vehicleColor}</td>
              <td>{vehicle.fuelType.name}</td>

              <td>
                <Container className="d-flex gap-3">
                  <Button
                    variant="warning"
                    onClick={handleEditVehicle}
                    id={vehicle.chassisNumber}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={handleRemoveVehicle}
                    id={vehicle.chassisNumber}
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
