const productos = [
    {nombre: "semillas de chia 300g", precio: 392},
    {nombre: "mix frutal 100g", precio: 430},
    {nombre: "jugo natural de frutas 1lt", precio: 210},
    {nombre: "limonada 1lt", precio: 190},
    {nombre: "frutos secos 100g", precio: 210},
]

let carrito = []

let seleccion = prompt("Bienvenido a AlmaZen desea comprar algun producto? (si / no)")

while(seleccion != "si" && seleccion != "no"){
    alert("Ingresar si o no.")
    seleccion = prompt("Respues invalida, desea comprar algo? (si / no)")
}

if(seleccion == "si"){
    alert("Productos en stock")
    let todoslosProductos = productos.map((producto)=> producto.nombre + " " + producto.precio + "$")
    alert(todoslosProductos.join(" - "))
}else if (seleccion == "no"){
    alert("Gracias vuelva prontos.")
}

while(seleccion != "no"){
    let producto = prompt("agregar al carrito (semillas de chia 300g, mix frutal 100g, jugo natural de frutas 1lt, limonada 1lt, frutos secos 100g.)" )
    let precio = 0

    if(producto == "semillas de chia 300g" || producto == "mix frutal 100g" || producto == "jugo natural de frutas 1lt" || producto == "limonada 1lt" || producto == "frutos secos 100g"){
        switch(producto){
            case "semillas de chia 300g":
                precio = 392;
                break;
            case "mix frutal 100g":
                precio = 430;
                break;
            case "jugo natural de frutas 1lt":
                precio = 210;
                break;
            case "limonada 1lt":
                precio = 190;
                break;
            case "frutos secos 100g":
                precio = 210;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt ("¿cuantos desea llevar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("Producto fuera de stock")
    }

    seleccion = prompt("¿desea llevar algo mas? (si / no)")
    while(seleccion === "no"){
        alert("Gracias por comprar en tu ALMAZEN")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`Debe abonar: $ ${total} `)