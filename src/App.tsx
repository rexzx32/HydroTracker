import "./App.css";
import { Route, Routes } from "react-router-dom";
import ConfiguracionUsuario from "./pages/ConfiguracionUsuario";
import PanelPrincipal from "./pages/PanelPrincipal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ConfiguracionUsuario />} />
      <Route path="/panel" element={<PanelPrincipal />} />
    </Routes>
  );
}

export default App;
