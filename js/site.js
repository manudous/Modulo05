const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
];

//Listar todos los artículos

for (item of carrito) {
    print(item);
}

function print(cart) {
    console.log("----- Artículo ------");
    for(item in cart){
        console.log(item + ":" + cart[item]);
    }
}

// Eliminar el producto con id 54657 del carrito de la compra.
// Al listarlo no aparezca
//
// for (item of carrito) {
//     if (item.id != 54657) print(item);
// }

// function print(cart) {
//     console.log("----- Artículo ------");
//     for(item in cart){
//         console.log(item + ":" + cart[item]);
//     }
// }

// Otra opción es eliminar el producto id 54657 del carrito.

// var index = 0;


// for (i = 0; i < carrito.length ; i++){
//     if (carrito[i].id == 54657) {
//         index = i;
//     }
// }

// carrito.splice(index, 1);

// for (item of carrito) {
//     print(item);
// }

// function print(cart) {
//     console.log("----- Artículo ------");
//     for(item in cart){
//         console.log(item + ":" + cart[item]);
//     }
// }

// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).

// var total = 0;

// for(item of carrito){
//     total += item.price * item.count;
// }

// console.log(`El total del carrito de la compra es: ${total.toFixed(2)}€`);

// Filtrar por los productos que sean prime.

// for (item of carrito) {
//     if(item.premium) print(item);
// }

// function print(cart) {
//     console.log("----- Artículo ------");
//     for(item in cart){
//         console.log(item + ":" + cart[item]);
//     }
// }

// Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido
// tiene gastos de envío".

// var allsPrime = true;

// for(item of carrito){
//    if (item.premium == false) allsPrime = false;
// }

// (allsPrime) ? console.log(`Pedido sin gastos de envío.`) : 
//               console.log(`Este pedido tiene gastos de envío.`);


// Aplicar un descuento del 5% si la compra es mayor de 100 €.

// var total = 0;

// for(item of carrito){
//     total += item.price * item.count;
// }

// if(total > 100) total += - (total * 0.05);

// console.log(`El total de la compra ha sido ${total.toFixed(2)}€`);
