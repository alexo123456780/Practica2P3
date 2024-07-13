function limpiarResultado(id) {
    document.getElementById(id).textContent = '';
    const inputId = id.replace('resultado', '').toLowerCase();
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.value = '';
    }
}


function verificarEdad() {
    const edad = parseInt(document.getElementById('edad').value);
    const resultado = document.getElementById('resultadoEdad');
    
    if (isNaN(edad)) {
        resultado.textContent = 'Por favor, ingresa una edad válida.';
    } else if (edad >= 18) {
        resultado.textContent = '¡Eso es todo tigre, eres mayor de edad puedes conducir!';
    } else {
        resultado.textContent = 'Aún no puedes conducir, tas chavito.';
    }
}


function calcularCalificacion() {
    const nota = parseFloat(document.getElementById('nota').value);
    const resultado = document.getElementById('resultadoNota');
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        resultado.textContent = 'Por favor, ingresa una nota válida entre 0 y 10.';
    } else if (nota >= 0 && nota <= 3) {
        resultado.textContent = 'Muy deficiente';
    } else if (nota > 3 && nota <= 5) {
        resultado.textContent = 'Insuficiente';
    } else if (nota > 5 && nota <= 6) {
        resultado.textContent = 'Suficiente';
    } else if (nota > 6 && nota <= 7) {
        resultado.textContent = 'Bien';
    } else if (nota > 7 && nota <= 9) {
        resultado.textContent = 'Notable';
    } else {
        resultado.textContent = 'Sobresaliente';
    }
}


let cadenas = [];

function agregarCadena() {
    const cadena = document.getElementById('cadena').value;
    if (cadena) {
        cadenas.push(cadena);
        document.getElementById('cadena').value = '';
    }
}

function mostrarResultado() {
    const resultado = document.getElementById('resultadoCadenas');
    if (cadenas.length > 0) {
        resultado.textContent = cadenas.join('-');
    } else {
        resultado.textContent = 'No se han ingresado cadenas.';
    }
}

function limpiarCadenas() {
    cadenas = [];
    document.getElementById('resultadoCadenas').textContent = '';
    document.getElementById('cadena').value = '';
}


function calcularLetraDNI() {
    console.log("Función calcularLetraDNI() llamada");
    const dniInput = document.getElementById('dni');
    const dni = parseInt(dniInput.value);
    const resultado = document.getElementById('resultadoDNI');
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    
    console.log("Número de DNI introducido:", dni);

    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        console.log("DNI inválido");
        alert('Por favor, ingresa un número de DNI válido (0-99999999).');
        dniInput.value = '';
        dniInput.focus();
    } else {
        const letra = letras.charAt(dni % 23);
        console.log("Letra calculada:", letra);
        resultado.textContent = `La letra del DNI ${dni} es: ${letra}`;
    }
}

function limpiarResultado(id) {
    console.log("Limpiando resultado:", id);
    document.getElementById(id).textContent = '';
    const inputId = id.replace('resultado', '').toLowerCase();
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.value = '';
    }
}

console.log("Script cargado correctamente");