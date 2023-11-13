// El Instituto Sudamericano ha definido los criterios para otorgar las Becas Estudiantiles, especificando que el estudiante debe mantener un promedio igual o superior a 8.5 y
// que los ingresos mensuales familiares no superen los 600 dólares.Se requiere un programa que verifique estas condiciones ingresando la información correspondiente y muestre
//  un mensaje de "Aprobado" o "Desaprobado".



let ingresos = Number(prompt("¿Cuáles son sus ingresos familiares?"))
let promedio = Number(prompt("¿Cual es tu promedio?"))

if ( promedio >= 8.5 && (ingresos <= 600)){
    alert ("Esta aprobado")

}
else{
    alert("Esta desaprobado")
}


