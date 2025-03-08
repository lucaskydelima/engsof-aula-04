import Pagina from "../templates/Pagina";
import FormCadastroVeiculo from "./formularios/FormCadastroVeiculo";
import TableVeiculos from "./tabelas/TableVeiculos";

import { ContextoVeiculoProvider } from "../contexts/ContextVeiculo";

import { useState } from "react";

export default function TelaCadastroVeiculo() {
  const [viewMode, setViewMode] = useState(true);
  const [editMode, setEditMode] = useState(false);
  return (
    <ContextoVeiculoProvider>
      <Pagina titulo="Cadastro de Veículos">
        {viewMode ? (
          <>
            <TableVeiculos
              setViewMode={setViewMode}
              setEditMode={setEditMode}
            />
          </>
        ) : (
          <FormCadastroVeiculo
            setViewMode={setViewMode}
            editMode={editMode}
            setEditMode={setEditMode}
          />
        )}
      </Pagina>
    </ContextoVeiculoProvider>
  );
}
