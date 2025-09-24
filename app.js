// Declaración del array para almacenar los nombres de amigos
let amigos = [];

// Función para cambiar tema
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Actualizar el botón
    updateThemeButton(newTheme);
}

// Función para actualizar el icono del botón
function updateThemeButton(theme) {
    const sunIcon = document.querySelector('.theme-icon.sun');
    const moonIcon = document.querySelector('.theme-icon.moon');
    
    if (theme === 'dark') {
        sunIcon.style.opacity = '1';
        moonIcon.style.opacity = '0';
    } else {
        sunIcon.style.opacity = '0';
        moonIcon.style.opacity = '1';
    }
}

// Inicializar tema al cargar la página
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || 'light';  // por defecto 'light'
    document.body.setAttribute('data-theme', theme);
    updateThemeButton(theme);
}

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Verificar si el nombre ya existe para evitar duplicados
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    amigos.push(nombre);

    // Actualizar visualización de la lista
    actualizarLista();
    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar visualmente la lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(function(amigo, indice) {
        const elemento = document.createElement("li");
        elemento.innerHTML = `
            <span class="nombre-amigo">${amigo}</span>
            <button class="btn-eliminar" onclick="eliminarAmigo(${indice})" aria-label="Eliminar ${amigo}">❌</button>
        `;
        lista.appendChild(elemento);
    });
}

// Función para eliminar un amigo específico de la lista
function eliminarAmigo(indice) {
    const nombreEliminado = amigos[indice];
    amigos.splice(indice, 1);
    actualizarLista();
    
    // Limpiar resultado si estaba mostrando el amigo eliminado
    const resultado = document.getElementById("resultado");
    if (resultado.innerHTML.includes(nombreEliminado)) {
        resultado.innerHTML = "";
    }
}

// Función para vaciar toda la lista de amigos
function vaciarLista() {
    if (amigos.length === 0) {
        alert("La lista ya está vacía.");
        return;
    }
    
    const confirmacion = confirm("¿Estás seguro de que quieres eliminar todos los amigos de la lista?");
    if (confirmacion) {
        amigos = [];
        actualizarLista();
        document.getElementById("resultado").innerHTML = "";
        alert("Lista vaciada correctamente.");
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos para realizar el sorteo.");
        return;
    }
    
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];
    document.getElementById("resultado").innerHTML = `<li class="resultado-sorteo">🎉 ${sorteado} 🎉</li>`;
}

// Inicializar tema cuando se carga la página
document.addEventListener('DOMContentLoaded', initTheme);
