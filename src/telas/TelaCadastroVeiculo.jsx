import Pagina from "../templates/Pagina";
import FormCadastroVeiculo from "./formularios/FormCadastroVeiculo";

export default function TelaCadastroVeiculo() {
  return (
    <Pagina titulo="Cadastro de Veículos">
      <FormCadastroVeiculo />
    </Pagina>
  );
}
