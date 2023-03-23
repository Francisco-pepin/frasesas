const columnaA = [
    "En cuanto arreglemos el goteo de recursos",
    "En cuanto completemos las pruebas",
    "En cuanto hayamos optimizado el código",
    "Apenas nos arreglen el bug",
    "Cuando se solvente el problema de instalación",
    "Cuando averiguemos por qué se cae el proceso",
    "Cuando hayamos mejorado el rendimiento",
    "En cuanto completemos la restauración",
    "Apenas instalemos el último parche",
    "En cuanto terminemos la implementación"
];

function generaExcusa() {
    // Calculamos de forma aleatoria el indice para cada arreglo de frases
    const posicionA = Math.floor(Math.random()*columnaA.length);
    
    // Concatenamos las 3 partes de la excusa en una sola.
    const excusa = `${columnaA[posicionA]}`
    
    //Hacemos que la función devuelva la excusa armada.
    return excusa;
}

console.log(generaExcusa());

//Busco en el HTML el elemento con ID excusa y reemplazo el contenido por lo que me devuelva la función generaExcusa()
function colocaExcusa() {
    document.getElementById("excusa").innerHTML = generaExcusa();
}

//Ejecuto la función, para cuando cargue la página, automáticamente ya haya una excusa cargada.
colocaExcusa();