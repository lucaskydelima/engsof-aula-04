import { createContext, useContext, useState } from "react";

const VeiculoContexto = createContext();

export const ContextoVeiculoProvider = ({ children }) => {
  const initialState = {
    plate: "",
    model: "",
    brand: { id: 0, name: "" },
    yearOf: "",
    color: "",
    chassis: "",
    renavam: "",
    fuel: { id: 0, name: "" },
  };

  const [vehicleList, setVehicleList] = useState([]);
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
