
// separarPorPalabrasPares

// Estrucutra del resultado

// resultado = {
//     pares:[...],
//     impares:[...]:
// }

let palabras = ['Auto', 'Parlante', 'Moto', 'Sal', 'Perfume', 'estrella', 'Sol', 'Nubes', "Ezequiel"];

const resultado = separarPorPares(palabras);

function separarPorPares(array) {
    let resultado = {
        pares: [],
        impares: []
    };

    for (let i = 0; i < array.length; i++) {
        if (array[i].length % 2 === 0) {
            resultado.pares.push(array[i]);
        } else {
            resultado.impares.push(array[i]);
        }
    }

    return resultado;
}



console.log(resultado);