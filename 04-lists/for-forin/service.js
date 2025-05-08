import axios from "axios";

const URL = 'https://swapi.bry.com.br/api/people'

async function getPeople (nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);
    return response.data

}



export default getPeople;

// getPeople('r2')
//     .then((result) => {
//         console.log('RESULTADO: ', result);
//     })
//     .catch ((error) => {
//         console.error(error);
//     })