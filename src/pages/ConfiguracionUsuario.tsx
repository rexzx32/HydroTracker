import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ConfiguracionUsuario() {
  const [dailyGoal, setDailyGoal] = useState(2); // Meta en litros
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("dailyGoal", dailyGoal * 1000); // Guardar en ml
    navigate("/panel");
  };

  return (
    <div className="config-container">
      <h1>Configura tu meta diaria</h1>
      <label htmlFor="daily-goal">Meta diaria (litros):</label>
      <input
        type="number"
        id="daily-goal"
        value={dailyGoal}
        onChange={(e) => setDailyGoal(Number(e.target.value))}
      />
      <button className="button-usuario" onClick={handleSubmit}>Guardar y Continuar</button>
    </div>
  );
}

export default ConfiguracionUsuario;
