

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = obtenerNumerosPares(numeros);

function obtenerNumerosPares(array) {

    let numerosPares = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {
            numerosPares.push(array[i]);
        }
        
    }

    return numerosPares;
}

console.log(pares);


