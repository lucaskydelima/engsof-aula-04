import { createContext, useContext, useState } from "react";

const ContextoLogin = createContext();

export const ContextoLoginProvider = ({ children }) => {
  const [dadosUsuario, setDadosUsuario] = useState({
    usuario: "",
    logado: false,
  });

  return (
    <ContextoLogin.Provider value={{ dadosUsuario, setDadosUsuario }}>
      {children}
    </ContextoLogin.Provider>
  );
};

export const useContextoLogin = () => useContext(ContextoLogin);
