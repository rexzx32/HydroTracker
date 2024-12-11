import { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function PanelPrincipal() {
  const [dailyGoal, setDailyGoal] = useState(2000); // Meta en ml
  const [consumedWater, setConsumedWater] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const savedGoal = localStorage.getItem("dailyGoal");
    if (savedGoal) {
      setDailyGoal(Number(savedGoal));
    }
  }, []);

  const handleAddWater = (amount: number) => {
    setConsumedWater(consumedWater + amount);
  };

  const progress = Math.min((consumedWater / dailyGoal) * 100, 100).toFixed(2);

  return (
    <div className="panel-container">
      <header>
        <h1>HydroTracker</h1>
        <p>¡Registra tu consumo diario de agua y alcanza tu meta!</p>
      </header>

      <main>
        <section className="progress-section">
          <p>Total consumido: {consumedWater} ml</p>
          <p>Progreso: {progress}%</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </section>

        <section className="input-section">
          <button onClick={() => handleAddWater(250)}>Agregar 250ml</button>
          <button onClick={() => handleAddWater(500)}>Agregar 500ml</button>
          <button onClick={() => navigate("/")}>Establecer Nueva Meta</button>
        </section>
      </main>
    </div>
  );
}

export default PanelPrincipal;
