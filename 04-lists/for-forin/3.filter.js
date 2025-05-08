import getPeople from "./service.js"



Array.prototype.meuFilter = function(callback) {
    
    const list = [];
    for (let index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        if(!result) continue;
        list.push(item)
    }

    return list;
}


async function main() {
    try {
        const { results } = await getPeople('a');
        // const familiaLars = results.filter((item) => {
        //     // por padrão precisa retornar um booleano para informar se deve manter ou remover da lista
        //     // false -> remover da lista
        //     // true -> mantém
        //     // não encontrou = -1
        //     // encontrou = posição no array
        //     const result = item.name.toLowerCase(). indexOf("lars") === -1
        //     return result
        // });

        const familiaLars = results.meuFilter((item, index, list) => {
            console.log(`Index: ${index} --- ${list.length}`)
            return item.name.toLowerCase().indexOf("lars") !== -1
        })

        const names = familiaLars.map((pessoa) =>  pessoa.name );

        console.log(`--- Names ---\n${names.join(", \n")}`);
    } catch (error) {
       console.error("DEU RUIM: ", error); 
    }
}

main();