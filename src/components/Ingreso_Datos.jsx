import "./Ingreso_Datos.css";
import React, { useState, useEffect } from "react";
import {
  FormatCurrency,
  FormatPercentage,
  FormatPeriods,
} from "./Formato";

function Inputs({ onChange }) {
  const [prestamo, setprestamo] = useState("");
  const [periodo, setperiodo] = useState("");
  const [interes, setinteres] = useState("");

  useEffect(() => {
    onChange(prestamo, periodo, interes);
  }, [onChange, prestamo, periodo, interes]);

  return (
    <div class="contenedor">
    <header class="header">
      <h2>Tabla de amortización del préstamo</h2>
    </header>
    <main class="contenido">
      <h1>Tipo de Amortización</h1>
      <div class="opciones"></div>
      <div class="row">
        <div class="col col-lg-3"><button class="btn btn-outline-success" type="button" id="input1">
          S. Frances
        </button></div>
        <div class="col col-lg-3"><button class="btn btn-outline-primary" type="button" id="input2">
          S. Aleman
        </button></div>
        <div class="col col-lg-3"><button class="btn btn-outline-warning" type="button" id="input3">
          S. Ingles
        </button></div>
        <div class="col col-lg-3"><button class="btn btn-outline-danger" type="button" id="input4">
          S. Flat
        </button></div>
      </div>
    </main>

    <div class="montos">
      <h2>Monto del préstamo</h2>
      <input
        id="prestamo"
        class="calc-options__input"
        placeholder="$10,000,000"
        type="number"
        min="0"
        onChange={(e) => setprestamo(e.target.value)}
        InputProps={{
          inputComponent: FormatCurrency,
        }}
      />
    </div>

    <div class="intereses">
      <h2>Interes</h2>
      <div class="interes">
        <input
          id="interes"
          class="calc-options__input"
          placeholder="1.5%"
          name="monto"
          type="number"
          min="0"
          max="100"
          onChange={(e) => setinteres(e.target.value)}
          InputProps={{
            inputComponent: FormatPercentage,
          }}
        />
      </div>
    </div>

    <div class="tiempos">
      <h2>Tiempo</h2>
      <div class="tiempo">
        <input
          id="periodo"
          class="calc-options__input"
          placeholder="12"
          name="tiempo"
          type="number"
          min="0"
          onChange={(e) => setperiodo(e.target.value)}
          InputProps={{
            inputComponent: FormatPeriods,
          }}
        />
        <select
          class="calc-options__select"
          aria-labelledby="prestamoPeriodLabel"
        >
          <option value="Years">Años</option>
          <option value="Months">Meses</option>
        </select>
      </div>
    </div>

    <div class="boton d-grid gap-2">
      <button id='btn_calcular' class="btn btn-outline-primary" type="button">
        Calcular
      </button>
    </div>
  </div>
  );
}

export default Inputs;
