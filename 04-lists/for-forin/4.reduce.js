import getPeople from "./service.js"

Array.prototype.meuReduce = function (callback, valorInicial) {

    let valorFinal =  valorInicial !== undefined ? valorInicial : this[0]
    for (let index = 0; index < this.length; index++) {
        const item = this[index]
        valorFinal = callback(valorFinal, item, this)
    }
    return valorFinal

}

async function main() {
    try {
        const { results } = await getPeople('a');
        // const height = results.map((item) => parseInt(item.height))
        // const total = height.reduce ((preview, next) => {
        //     return preview + next
        // }, 0) 

        const myList = [
            ["Ronaldo", "Rocha"],
            ["TSI", "Gastronomia"]
        ]

        const total = myList.meuReduce((preview, next) => {
            return preview.concat(next)
        }, [])


        // console.log(`PESOS: ${height}`);
        console.log(`TOTAL: ${total}`);

    } catch (error) {
        console.error(`DEU RUIM: ${error}`)
    }
}

main();