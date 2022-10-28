import "./Ingreso_Datos.css";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import {
  FormatCurrency,
  FormatPercentage,
  FormatPeriods,
} from "./Formato";

function Ingreso({ onChange }) {
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
    <h3>Prestamo</h3>
    <TextField
        id="prestamo"
        focused
        placeholder="$10,000,000"
        variant="outlined"
        color="success"
        margin="none"
        onChange={(e) => setprestamo(e.target.value)}
        InputProps={{
          inputComponent: FormatCurrency,
        }}
      />
    </div>

    <div class="intereses">
    <h3>Interes</h3>
    <TextField
        id="interes"
        focused
        placeholder="1.5%"
        variant="outlined"
        color="success"
        margin="none"
        onChange={(e) => setinteres(e.target.value)}
        InputProps={{
          inputComponent: FormatPercentage,
        }}
      />
    </div>

    <div class="tiempos">
    <h3>Periodos</h3>
    <TextField
        id="periodo"
        focused
        placeholder="12"
        variant="outlined"
        color="success"
        margin="none"
        onChange={(e) => setperiodo(e.target.value)}
        InputProps={{
          inputComponent: FormatPeriods,
        }}
      />
    </div> 
  </div>
  );
}

export default Ingreso;
