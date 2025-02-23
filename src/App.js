import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import TelaCadastroVeiculo from "./telas/TelaCadastroVeiculo";
import TelaCadastroCliente from "./telas/TelaCadastroCliente";
import TelaLogin from "./telas/TelaLogin";
import TelaHome from "./telas/TelaHome";

import { useContextoLogin } from "./contexts/ContextLogin";

function App() {
  const { dadosUsuario, setDadosUsuario } = useContextoLogin();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {dadosUsuario.logado ? (
            <>
              <Route path="/" element={<TelaHome />} />
              <Route path="/veiculo" element={<TelaCadastroVeiculo />} />
              <Route path="/cliente" element={<TelaCadastroCliente />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<TelaLogin />} />
              <Route path="*" element={<Navigate to={"/login"} replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
