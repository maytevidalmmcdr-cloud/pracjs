function calcularSalarioNeto() {
    let puesto=parseInt(document.getElementById('puesto').value);
    let horas=parseInt(document.getElementById('horas').value);
    let anios=parseInt(document.getElementById('anios').value);
    let sueldoHora=0;

    switch(puesto){
        case 1: sueldoHora=300; break; // Gerente
        case 2: sueldoHora=100; break; // Secretaria
        case 3: sueldoHora=120; break; // Cajero
        case 4: sueldoHora=150; break; // Supervisor (nuevo)
    }

    let sueldoBase=sueldoHora*horas;
    let canastaBasica=sueldoBase*0.025;
    let apoyo=sueldoBase*0.05;
    let antiguedad=anios*0.15;
    let estimulo=sueldoBase*0.02;
    let bono=500; // Nueva percepción fija

    let totalPercepciones=sueldoBase+canastaBasica+apoyo+antiguedad+estimulo+bono;

    let ISR=sueldoBase*0.15;
    let servicioSalud=sueldoBase*0.035;
    let AFORE=sueldoBase*0.04;
    let sindicato=sueldoBase*0.01;
    let seguroVida=200; // Nueva deducción fija

    let totalDeducciones=ISR+servicioSalud+AFORE+sindicato+seguroVida;
    let salarioNeto=totalPercepciones-totalDeducciones;

    // Mostrar resultados
    document.getElementById("sueldoBase").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("apoyo").innerHTML="<h3>$"+apoyo.toFixed(2)+"</h3>";
    document.getElementById("canastaBasica").innerHTML="<h3>$"+canastaBasica.toFixed(2)+"</h3>";
    document.getElementById("antiguedad").innerHTML="<h3>$"+antiguedad.toFixed(2)+"</h3>";
    document.getElementById("estimulo").innerHTML="<h3>$"+estimulo.toFixed(2)+"</h3>";
    document.getElementById("bono").innerHTML="<h3>$"+bono.toFixed(2)+"</h3>"; // Nuevo
    document.getElementById("totalPercepciones").innerHTML="<h3>$"+totalPercepciones.toFixed(2)+"</h3>";

    document.getElementById("ISR").innerHTML="<h3>$"+ISR.toFixed(2)+"</h3>";
    document.getElementById("servicioSalud").innerHTML="<h3>$"+servicioSalud.toFixed(2)+"</h3>";
    document.getElementById("AFORE").innerHTML="<h3>$"+AFORE.toFixed(2)+"</h3>";
    document.getElementById("sindicato").innerHTML="<h3>$"+sindicato.toFixed(2)+"</h3>";
    document.getElementById("seguroVida").innerHTML="<h3>$"+seguroVida.toFixed(2)+"</h3>"; // Nuevo
    document.getElementById("totalDeducciones").innerHTML="<h3>$"+totalDeducciones.toFixed(2)+"</h3>";

    document.getElementById("salarioNeto").innerHTML="<h3>$"+salarioNeto.toFixed(2)+"</h3>";
}
