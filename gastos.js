function enviarPresupuesto() {
    let valorCajaPresupuesto = document.getElementById('txtPresupuesto').value;
    let elParrafoPresupuesto = document.getElementById('parrafoPresupuesto');
    elParrafoPresupuesto.innerText = valorCajaPresupuesto;

    let elParrafoGasto = document.getElementById('parrafoGasto');
    let elParrafoSaldo = document.getElementById('parrafoSaldo');
    
    let elAcumuladoGastos = acumularGastos();
    elParrafoGasto.innerText = elAcumuladoGastos;

    let elSaldo = parseFloat(valorCajaPresupuesto) - parseFloat(elAcumuladoGastos);
    elParrafoSaldo.innerText = elSaldo;
}

var arrNombresGastos = [];
var arrCantidadGastos = [];

function acumularGastos() {
    let acumuladoGastos = 0;
    for (let i = 0; i < arrCantidadGastos.length; i++) {
        acumuladoGastos = acumuladoGastos + arrCantidadGastos[i];
    }
    return acumuladoGastos;
}

function eliminarElemento(indice) {
    arrNombresGastos.splice(indice, 1);
    arrCantidadGastos.splice(indice, 1);
    mostrarGastos();
}

function mostrarGastos() {
    let elParrafoNombreGasto = document.getElementById('parrafoNombreGasto');
    let elParrafoValor = document.getElementById('parrafoValor');
    let elParrafoAccion = document.getElementById('parrafoAccion');

    elParrafoNombreGasto.innerHTML = '';
    elParrafoValor.innerHTML = '';
    elParrafoAccion.innerHTML = '';

    for (let i = 0; i < arrNombresGastos.length; i++) {
        let unParrafoTexto = document.createElement('p');
        let unParrafoValor = document.createElement('p');
        let unParrafoAccion = document.createElement('p');
        let unIconoBasura = document.createElement('i');

        unParrafoTexto.innerText = arrNombresGastos[i];
        unParrafoValor.innerText = arrCantidadGastos[i];
        unParrafoAccion.appendChild(unIconoBasura);

        unIconoBasura.className = 'fas fa-trash-alt';
        unIconoBasura.setAttribute('onclick', 'eliminarElemento(' + i + ')');

        elParrafoNombreGasto.appendChild(unParrafoTexto);
        elParrafoValor.appendChild(unParrafoValor);
        elParrafoAccion.appendChild(unParrafoAccion);
    }
}

function anadirGasto() {
    let elNombreGasto = document.getElementById('txtNombreGasto').value;
    let laCantidadGasto = document.getElementById('txtCantidadGasto').value;

    arrNombresGastos.push(elNombreGasto);
    arrCantidadGastos.push(parseFloat(laCantidadGasto));

    let valorParrafoPresupuesto = document.getElementById('parrafoPresupuesto').innerText;
    let elParrafoGasto = document.getElementById('parrafoGasto');
    let elParrafoSaldo = document.getElementById('parrafoSaldo');

    let elAcumuladoGastos = acumularGastos();
    elParrafoGasto.innerText = elAcumuladoGastos;

    let elSaldo = parseFloat(valorParrafoPresupuesto) - parseFloat(elAcumuladoGastos);
    elParrafoSaldo.innerText = elSaldo;

    mostrarGastos();
}

function asignarEventos() {
    let elBotonCalcular = document.getElementById('btnCalcular');
    elBotonCalcular.addEventListener('click', enviarPresupuesto);

    let elBotonAnadir = document.getElementById('btnAnadirGasto');
    elBotonAnadir.addEventListener('click', anadirGasto);
}

asignarEventos();
