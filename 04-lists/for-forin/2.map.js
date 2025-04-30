import axios from "axios";
import service from "./service.js";


Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];
    for (let indice = 0; indice <= this.length - 1; indice++){
        const resultado = callback(this[indice], indice);
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado;
}

async function main() {
    try {
        const results = await service.getPeople('a');
        // const names = [];
        // results.results.forEach(element => {
        //     names.push(element.name);
        // });

    //    const names =  results.results.map((element)=> element.name);
        const names = results.results.meuMap((element, index) => `[${index+1}] - ${element.name}\n`)
        console.log(`NAMES:\n ${names.split(',')} `);
    } catch (error) {
        console.error('DEU RUIM: ', error);
    }       
}

main();