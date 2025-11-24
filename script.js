/*var miCatalogo = [
  {
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    categoria: "Aventura",
    puntaje: 9.8,
    precio: 6,
    porcentaje: 6,
    foto: "https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg",
    descripcion: "Una épica aventura en un vasto mundo abierto donde Link debe salvar Hyrule una vez más."
  },
  {
    nombre: "Elden Ring",
    categoria: "RPG / Acción",
    puntaje: 9.6,
    precio: 7,
    porcentaje: 7,
    foto: "https://juegosdigitalesargentina.com/files/images/productos/1717450224-elden-ring-shadow-of-the-erdtree-dlc-ps4-pre-orden-0.webp",
    descripcion: "Un mundo abierto creado por FromSoftware y George R.R. Martin lleno de desafíos y secretos."
  },
  {
    nombre: "Hades",
    categoria: "Roguelike",
    puntaje: 9.3,
    precio: 8,
    porcentaje: 8,
    foto: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg?t=1715722799",
    descripcion: "Escapa del inframundo griego en este adictivo roguelike con una narrativa excepcional."
  },
    {
    nombre: "Stardew Valley",
    categoria: "Simulación / RPG",
    puntaje: 9.1,
    precio: 9,
    porcentaje: 9,
    foto: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
    descripcion: "Abandona la ciudad y conviértete en granjero en este relajante simulador de vida rural."
  },
  {
    nombre: "Hollow Knight",
    categoria: "Metroidvania",
    puntaje: 9.5,
    precio: 10,
    porcentaje: 10,
    foto: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg?t=1695270428",
    descripcion: "Explora un vasto reino subterráneo lleno de insectos, secretos y combates intensos."
  }
];
*/

var miCatalogo = [
  {
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    categoria: "Aventura",
    precio: 6,
    foto: "https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg",
    descripcion: "Una épica aventura en un vasto mundo abierto donde Link debe salvar Hyrule una vez más."
  },
  {
    nombre: "Elden Ring",
    categoria: "RPG / Acción",
    precio: 7,
    foto: "https://juegosdigitalesargentina.com/files/images/productos/1717450224-elden-ring-shadow-of-the-erdtree-dlc-ps4-pre-orden-0.webp",
    descripcion: "Un mundo abierto creado por FromSoftware y George R.R. Martin lleno de desafíos y secretos."
  },
  {
    nombre: "Hades",
    categoria: "Roguelike",
    precio: 8,
    foto: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg?t=1715722799",
    descripcion: "Escapa del inframundo griego en este adictivo roguelike con una narrativa excepcional."
  },
    {
    nombre: "Stardew Valley",
    categoria: "Simulación / RPG",
    precio: 9,
    foto: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
    descripcion: "Abandona la ciudad y conviértete en granjero en este relajante simulador de vida rural."
  },
  {
    nombre: "Hollow Knight",
    categoria: "Metroidvania",
    precio: 10,
    foto: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg?t=1695270428",
    descripcion: "Explora un vasto reino subterráneo lleno de insectos, secretos y combates intensos."
  }
];

const categoriasDisponibles = [
  "Aventura",
  "RPG / Acción",
  "Roguelike",
  "Simulación / RPG",
  "Plataformas",
  "Metroidvania"
];

for(categoria of categoriasDisponibles){
    var nuevaOpcion = document.createElement("option");
    nuevaOpcion.value = categoria;
    nuevaOpcion.innerHTML = categoria;
    document.getElementById("menu-categoria").appendChild(nuevaOpcion);
}

function buscarConFiltro() {
    // "Blanqueamos" el contenedor de resultados cada vez que buscamos
    var contenedorResultados = document.getElementById("panel-resultados").innerHTML = ""; 

    // Obtenemos los valores de los filtros
    var valorMinimoIngresado = document.getElementById("input-valor-minimo").value;
    var valorMaximoIngresado = document.getElementById("input-valor-maximo").value;
    var categoriaElegida     = document.getElementById("menu-categoria").value;

  // Primer filtro: por valor mínimo (puntaje en mi caso)
    var catalogoFiltrado1 = miCatalogo.filter(juego => {
        return juego.precio >= Number(valorMinimoIngresado);
    });

    var catalogoFiltrado2 = miCatalogo.filter(juego => {
        return juego.precio <= Number(valorMaximoIngresado);
    });

    var catalogoFiltrado3 = catalogoFiltrado2.filter(juego => {
        return juego.categoria == categoriaElegida;
    });

    for (juego of catalogoFiltrado3) {
        var caja       = document.createElement("article");
        var titulo     = document.createElement("h3");
        var imagen     = document.createElement("img");
        var descripcion = document.createElement("span");
        var miIndicador = document.createElement("span");

        // Asignamos el contenido a cada elemento
        titulo.innerHTML       = juego.nombre;
        imagen.src             = juego.foto;
        imagen.alt             = juego.nombre;
        descripcion.innerHTML  = juego.descripcion;
        miIndicador.innerHTML  = juego.precio;
        miIndicador.classList.add("indicadorValor");

        // Le agregamos los elementos a el elemento caja
        caja.appendChild(titulo);
        caja.appendChild(imagen);
        caja.appendChild(descripcion);
        caja.appendChild(miIndicador);

        document.getElementById("panel-resultados").appendChild(caja);
    }

}
