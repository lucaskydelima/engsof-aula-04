import { createContext, useContext, useState } from "react";

import { vehicleData } from "../data/VehicleData";

const VeiculoContexto = createContext();

export const ContextoVeiculoProvider = ({ children }) => {
  const initialState = {
    licensePlate: "",
    vehicleModel: "",
    vehicleBrand: { id: 0, name: "" },
    yearOfManufacture: "",
    vehicleColor: "",
    chassisNumber: "",
    renavamNumber: "",
    fuelType: { id: 0, name: "" },
  };

  const [vehicleList, setVehicleList] = useState(vehicleData);
  const [vehicle, setVehicle] = useState(initialState);
  const [editedVehicle, setEditedVehicle] = useState(initialState);

  const resetVehicle = () => {
    setVehicle(initialState);
  };

  return (
    <VeiculoContexto.Provider
      value={{
        vehicleList,
        setVehicleList,
        vehicle,
        setVehicle,
        editedVehicle,
        setEditedVehicle,
        resetVehicle,
      }}
    >
      {children}
    </VeiculoContexto.Provider>
  );
};

export const useContextoVeiculo = () => useContext(VeiculoContexto);
