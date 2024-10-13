
const productos = [
    { nombre: "Laptop", categoria: "Electronica" },
    { nombre: "Telefono", categoria: "Electronica" },
    { nombre: "Tablet", categoria: "Electronica" },
    { nombre: "Smartwatch", categoria: "Electronica" },
    { nombre: "Teclado", categoria: "Electronica" },
    { nombre: "Audífonos", categoria: "Electronica" },
    { nombre: "Televisor", categoria: "Electronica" },
    { nombre: "Cámara", categoria: "Electronica" },
    { nombre: "Impresora", categoria: "Electronica" },

    
    { nombre: "Silla", categoria: "Muebles" },
    { nombre: "Escritorio", categoria: "Muebles" },
    { nombre: "Sofá", categoria: "Muebles" },
    { nombre: "Mesa de comedor", categoria: "Muebles" },
    { nombre: "Cama", categoria: "Muebles" },
    { nombre: "Armario", categoria: "Muebles" },
    { nombre: "Mesa de centro", categoria: "Muebles" },
    { nombre: "Estante", categoria: "Muebles" },

    
    { nombre: "Camiseta", categoria: "Ropa" },
    { nombre: "Pantalon", categoria: "Ropa" },
    { nombre: "Chaqueta", categoria: "Ropa" },
    { nombre: "Zapatos", categoria: "Ropa" },
    { nombre: "Gorra", categoria: "Ropa" },
    { nombre: "Bufanda", categoria: "Ropa" },
    { nombre: "Falda", categoria: "Ropa" },
    { nombre: "Vestido", categoria: "Ropa" },

    
    { nombre: "Manzana", categoria: "Frutas y Verduras" },
    { nombre: "Platano", categoria: "Frutas y Verduras" },
    { nombre: "Tomate", categoria: "Frutas y Verduras" },
    { nombre: "Lechuga", categoria: "Frutas y Verduras" },
    { nombre: "Zanahoria", categoria: "Frutas y Verduras" },
    { nombre: "Pepino", categoria: "Frutas y Verduras" },
    { nombre: "Brocoli", categoria: "Frutas y Verduras" },
    { nombre: "Espinaca", categoria: "Frutas y Verduras" },

    
    { nombre: "Atun", categoria: "Abarrotes" },
    { nombre: "Arroz", categoria: "Abarrotes" },
    { nombre: "Frijoles", categoria: "Abarrotes" },
    { nombre: "Aceite", categoria: "Abarrotes" },
    { nombre: "Azucar", categoria: "Abarrotes" },
    { nombre: "Harina", categoria: "Abarrotes" },
    { nombre: "Cereal", categoria: "Abarrotes" },
    { nombre: "Sal", categoria: "Abarrotes" },

    
    { nombre: "Pastel chocolate", categoria: "Panaderia" },
    { nombre: "Baguette", categoria: "Panaderia" },
    { nombre: "Croissant", categoria: "Panaderia" },
    { nombre: "Concha", categoria: "Panaderia" },
    { nombre: "Pan de caja", categoria: "Panaderia" },
    { nombre: "Donas", categoria: "Panaderia" },
    { nombre: "Pan integral", categoria: "Panaderia" },
    { nombre: "Pan de elote", categoria: "Panaderia" },

    
    { nombre: "Leche", categoria: "Lacteos" },
    { nombre: "Queso", categoria: "Lacteos" },
    { nombre: "Yogurt", categoria: "Lacteos" },
    { nombre: "Mantequilla", categoria: "Lacteos" },
    { nombre: "Crema", categoria: "Lacteos" },
    { nombre: "Helado", categoria: "Lacteos" },
    { nombre: "Queso cottage", categoria: "Lacteos" },
    { nombre: "Flan", categoria: "Lacteos" },

    
    { nombre: "Pollo", categoria: "Carnes y Pescados" },
    { nombre: "Carne de res", categoria: "Carnes y Pescados" },
    { nombre: "Pescado", categoria: "Carnes y Pescados" },
    { nombre: "Camarones", categoria: "Carnes y Pescados" },
    { nombre: "Chuleta", categoria: "Carnes y Pescados" },
    { nombre: "Salmon", categoria: "Carnes y Pescados" },
    { nombre: "Tocino", categoria: "Carnes y Pescados" },


    { nombre: "Jugo de naranja", categoria: "Bebidas" },
    { nombre: "Refresco", categoria: "Bebidas" },
    { nombre: "Agua mineral", categoria: "Bebidas" },
    { nombre: "Café", categoria: "Bebidas" },
    { nombre: "Té verde", categoria: "Bebidas" },
    { nombre: "Leche de almendra", categoria: "Bebidas" },
    { nombre: "Vino tinto", categoria: "Bebidas" },
    { nombre: "Cerveza", categoria: "Bebidas" }
];


const filtrarPorCategoria = (categoria) => {
    return productos.filter(producto => 
        producto.categoria.toLowerCase() === categoria.toLowerCase());
};


const mostrarProductos = (productosFiltrados) => {
    const listaProductos = document.getElementById('lista-productos');
    const mensaje = document.getElementById('mensaje');
    listaProductos.innerHTML = ''; 
    mensaje.textContent = ''; 

    if (productosFiltrados.length === 0) {
        listaProductos.innerHTML = '<li>No se encontraron productos en esta categoría.</li>';
        return;
    }

    productosFiltrados.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = producto.nombre;
        listaProductos.appendChild(li);
    });

    const categoriaSeleccionada = productosFiltrados[0]?.categoria || '';
    switch (categoriaSeleccionada.toLowerCase()) {
        case 'frutas y verduras':
            mensaje.textContent = 'Buenos productos para la dieta!!';
            break;
        case 'electronica':
            mensaje.textContent = 'Todo lo que ocupas para tu diversion.';
            break;
        case 'muebles':
            mensaje.textContent = '¡Excelentes productos para la casa!';
            break;
        case 'ropa':
            mensaje.textContent = '¡Lo esencial para vestir!';
            break;
        case 'abarrotes':
            mensaje.textContent = '¡Todo para tu dia a dia!';
            break;
        case 'panaderia':
            mensaje.textContent = '¡Un panecito nunca cae mal!';
            break;
        case 'lacteos':
            mensaje.textContent = '¡Productos de las vaquitas!';
            break;
        case 'carnes y pescados':
            mensaje.textContent = '¡Proteina para el cuerpo!';
            break;
        case 'bebidas':
            mensaje.textContent = '¡Una bebida nunca cae mal!';
            break;
        default:
            mensaje.textContent = '¡Los mejores productos que puedas encontrar!';
            break;
    }
};


document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault(); 
    const categoria = document.getElementById('categoria').value;
    const productosFiltrados = filtrarPorCategoria(categoria);
    mostrarProductos(productosFiltrados); 
});
