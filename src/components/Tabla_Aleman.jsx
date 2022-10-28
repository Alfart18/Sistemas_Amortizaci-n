import React from "react";
import "./Tabla_Aleman.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TablaAleman({ prestamo, periodo, interes }) {
  let amortizacionConstante = "";
  amortizacionConstante = (prestamo / periodo);
  let pago = "";
  if (prestamo && periodo && interes !== "") {
    pago = amortizacionConstante + prestamo * (interes / 100);
  }
  
  let rows = [{ period: 0, pago: 0, interest: 0, amortiza: 0, saldo: prestamo }];
  if (prestamo && periodo && interes !== "") {
    for (let period = 1; period <= periodo; period++) {
      rows.push({
        period: period,
        pago: ((prestamo * (1 + interes / 100) ** (period - 1) -
        (pago * ((1 + interes / 100) ** (period - 1) - 1)) / (interes / 100)) *
        interes) /
        100 + amortizacionConstante,
        interest: 
        ((prestamo * (1 + interes / 100) ** (period - 1) - (pago * ((1 + interes / 100) ** (period - 1) - 1)) / (interes / 100)) * interes) /100,
        amortiza: amortizacionConstante,
        saldo:
        (prestamo * (1 + interes / 100) ** period - (pago * ((1 + interes / 100) ** period - 1))/ (interes / 100)),
      });
    }
  }

  let formatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Periodo</b></TableCell>
            <TableCell align="center"><b>Cuota</b></TableCell>
            <TableCell align="center"><b>Intereses</b></TableCell>
            <TableCell align="center"><b>Amortización</b></TableCell>
            <TableCell align="center"><b>Saldo</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.period}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.period}</TableCell>
              <TableCell align="center">{formatter.format(row.pago)}</TableCell>
              <TableCell align="center">{formatter.format(row.interest)}</TableCell>
              <TableCell align="center">{formatter.format(row.amortiza)}</TableCell>
              <TableCell align="center">{formatter.format(row.saldo)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablaAleman;
