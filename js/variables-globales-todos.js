var modoRelax = false;
var movimientos = 0;
var cronometro;
//pista aca debes cambiar los iconos para que sea un juego unico
var grupoTarjetas = [
  ["๐ฑโ๐", "๐ถ"],
  ["๐", "๐ฑโ๐"],
  ["๐", "๐คฉ", "๐", "๐งถ"],
  ["๐ญ", "๐งต", "๐", "๐"],
  ["โฎ", "๐ซ", "๐", "๐"],
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60,
  },
];
