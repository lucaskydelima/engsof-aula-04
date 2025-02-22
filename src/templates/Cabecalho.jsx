import { Alert } from "react-bootstrap";

export default function Cabecalho(props) {
  return (
    <Alert variant="info" className="text-center">
      <h1>{props.titulo || "Informe um título"}</h1>
    </Alert>
  );
}
