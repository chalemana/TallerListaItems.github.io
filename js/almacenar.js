// Obtener los elementos del DOM
var input = document.getElementById('item');
var agregar = document.getElementById('agregar');
var listaContainer = document.getElementById('contenedor');
var limpiar = document.getElementById('limpiar');

// Función para cargar los ítems desde el almacenamiento local
function cargarItems() {
    var itemAlmacenamiento = JSON.parse(localStorage.getItem('items')) || [];
    itemAlmacenamiento.forEach(item => {
        var listaItem = document.createElement('li');
        listaItem.classList.add('list-group-item');
        listaItem.textContent = item;
        listaContainer.appendChild(listaItem);
    });
}

// Función para guardar los ítems en el almacenamiento local
function guardarItems() {
    var items = Array.from(listaContainer.getElementsByTagName('li'))
                        .map(item => item.textContent);
    localStorage.setItem('items', JSON.stringify(items));
}

// Función para agregar ítems a la lista
agregar.addEventListener('click', function() {
    var nuevoItemTexto = input.value.trim();

    if (nuevoItemTexto !== '') {
        var listaItem = document.createElement('li');
        listaItem.classList.add('list-group-item');
        listaItem.textContent = nuevoItemTexto;

        listaContainer.appendChild(listaItem);
        input.value = '';

        guardarItems();  l
    }
});

// Función para limpiar la lista
limpiar.addEventListener('click', ()=> {
    listaContainer.innerHTML = '';  
    localStorage.removeItem('items');  
});

document.addEventListener('DOMContentLoaded', cargarItems);
