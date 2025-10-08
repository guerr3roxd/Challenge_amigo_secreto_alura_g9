let amigos = [];

document.getElementById('theme-toggle').addEventListener('change', function(e) {
    const theme = e.target.checked ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    document.getElementById('theme-toggle').checked = savedTheme === 'dark';
}

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, indice) => {
        const elemento = document.createElement("li");
        elemento.innerHTML = `
            <span class="nombre-amigo">${amigo}</span>
            <button class="btn-eliminar" onclick="eliminarAmigo(${indice})" aria-label="Eliminar ${amigo}">❌</button>
        `;
        lista.appendChild(elemento);
    });
}

function eliminarAmigo(indice) {
    const nombreEliminado = amigos[indice];
    amigos.splice(indice, 1);
    actualizarLista();
    
    const resultado = document.getElementById("resultado");
    if (resultado.innerHTML.includes(nombreEliminado)) {
        resultado.innerHTML = "";
    }
}

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

document.addEventListener('DOMContentLoaded', initTheme);