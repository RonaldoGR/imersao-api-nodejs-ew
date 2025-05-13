import get from "axios"

const URL = 'https://swapi.bry.com.br/api/people'


export async function getPeople(nome) {

    const url = `${URL}/?search=${nome}&format=json`
    const result = await get(url)

    console.log(result.data)

    return result.data.results.map(peopleMap)
}

export function peopleMap(item) {
    return {
        nome: item.name,
        peso: item.height
    }
}