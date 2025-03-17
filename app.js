// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, ingrese un nombre.');
        return;
    }
    
    // Validar que el nombre no contenga números ni caracteres especiales
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nombre)) {
        alert('El nombre solo debe contener letras.');
        return;
    }
    
    // Validar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Limpiar el resultado anterior si existe
    document.getElementById('resultado').innerHTML = '';
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    // Agregar cada amigo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar que haya al menos 2 amigos para hacer el sorteo
    if (amigos.length < 2) {
        alert('Se necesitan al menos 2 participantes para realizar el sorteo.');
        return;
    }
    
    // Obtener un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
    
    const li = document.createElement('li');
    li.textContent = `¡Tu amigo secreto es: ${amigoSecreto}!`;
    listaResultado.appendChild(li);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Limpiar el array de amigos
    amigos = [];
    
    // Limpiar las listas
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    
    // Limpiar el input
    document.getElementById('amigo').value = '';
    
    alert('¡Juego reiniciado!');
}

// Agregar el botón de reinicio al HTML cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Añadir evento para la tecla Enter en el input
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keypress', function(event) {
        // Si se presiona Enter (código 13), llamar a la función agregarAmigo
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevenir comportamiento por defecto
            agregarAmigo();
        }
    });
    
    const buttonContainer = document.querySelector('.button-container');
    
    // Crear el botón de reinicio
    const resetButton = document.createElement('button');
    resetButton.className = 'button-reset';
    resetButton.innerHTML = 'Reiniciar juego';
    resetButton.onclick = reiniciarJuego;
    resetButton.setAttribute('aria-label', 'Reiniciar juego');
    
    // Añadir estilos al botón de reinicio
    resetButton.style.backgroundColor = '#C4C4C4';
    resetButton.style.color = '#444444';
    resetButton.style.marginTop = '10px';
    
    // Añadir hover effect
    resetButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#a1a1a1';
    });
    
    resetButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#C4C4C4';
    });
    
    // Agregar el botón al contenedor
    buttonContainer.appendChild(resetButton);
});