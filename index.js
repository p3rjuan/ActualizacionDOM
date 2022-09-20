class User {
  constructor(usuario, edad, region, vioDark) {
      this.usuario = usuario
      this.edad = edad
      this.region = region
      this.vioDark = vioDark
  }
}

function crearUsuario() {
let usuario = prompt("Ingresa tu usuario")
let edad = prompt("Ingresa tu edad")
let region = prompt("Ingresa tu region (EU, EUW, LAS, NA, BR.")
let vioDark = prompt("¿Has visto dark? (Si/No)")

if (vioDark.toLocaleLowerCase () === "si") {
  vioDark = true
} else {
  alert ("Te recomiendo verla con una libreta.. te vas a perder")
}

const objetoUsuario = new User(
  usuario,
  edad,
  region,
  vioDark,
);
return objetoUsuario
}

const usuarioUno = crearUsuario()
console.info(usuarioUno)

const top5 = [ 
'Peaky Blinders',
'Black Mirror',
'Bojack Horseman',
'Narcos',
'Stranger Things',
]

console.log(top5)

const seriesVistas = []

let opcion

do {
  opcion = parseInt(prompt("Bienvenido a QueHayNetflix! que quieres hacer hoy? \n1.Ver nuestro top5 de la semana \n2.Anota que series vistes.\n3.Series ya vistas \n4 Salir del menu"))


  switch (opcion) {
      case 1:

          function mostrarMenu() {
              let mensaje = "top5"
              let count = 1

              for (let series of top5) {
                  mensaje += `\n${count}. ${series}`
                  count++
              }
              return mensaje
          }

          alert(mostrarMenu())

          break
      case 2:
          let series = prompt("Que serie quieres anotar?")
          seriesVistas.push(series)
          console.log(seriesVistas)

          break
      case 3:

          function nuevaLista() {
              let mensaje = "series ya vistas"
              let count = 1

              for (let series of seriesVistas) {
                  mensaje += `\n${count}. ${series}`
                  count++
              }
              return mensaje
          }
          alert(nuevaLista())
          break

      case 4:
          alert("Gracias por usar QueHayNetflix, no olvides contarles a tus amigos sobre nosotros")

  }

} while (opcion !== 4)

  // AGREGADO PARA DOM


  console.log(document)

  console.log(document.head)
  console.log(document.body)


  const loMasVisto = [
    { id: 1,
      name: "Los simuladores", },
    { id: 2,
      name: "Breaking Bad",},
    {id: 3,
     name: "House Of Cards", },
    {id: 4,
    name: "Black mirror",},
    {id: 5,
      name: "Orange is the new black",},
]

const contenedorMasVisto = document.getElementById("contenedor-mas-visto")


for (const series of loMasVisto) {
  let column = document.createElement("div");
  column.className = "col-md-6 mt-4 ";
  column.id = `columna-${series.id}`;
  column.innerHTML = `
      <div class="card">
          <div class="card-body">
          <p class="card-text"> Serie: <b>${series.name}</b></p>
          </div>
      </div>`

      contenedorMasVisto.append(column);
}