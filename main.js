// declaración de productos

class Producto {
    constructor (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    }
}

const productos = [];


let limite = parseInt(prompt("Bienvenido a Tienda Mags. \n\nIngresá la cantidad de productos que querés sumar a la lista de productos:"));

const sumarProducto = (nuevoProducto) => {
    let nuevoNombre = prompt("Ingrese el nombre del nuevo producto");
    let nuevoPrecio = prompt ("Ingrese el precio del nuevo producto");

    productos.push (new Producto (nuevoNombre, nuevoPrecio));
}

for (let i = 1 ; i <= limite ; i++) {
sumarProducto ();
}

console.log (productos);
alert("¡Los productos han sido ingresados con éxito!");


