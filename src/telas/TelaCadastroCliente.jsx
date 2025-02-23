import Pagina from "../templates/Pagina";
import FormCadastroCliente from "./formularios/FormCadastroCliente";
export default function TelaCadastroCliente(props) {
  return (
    <Pagina titulo="Cadastro de Clientes">
      <FormCadastroCliente />
    </Pagina>
  );
}
