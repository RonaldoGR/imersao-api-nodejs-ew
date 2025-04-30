import service from './service.js';


async function main() {
    try {
        
        const result = await service.getPeople('a')
        const listNames = [];
        
        console.time('for');
        for ( let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i];
             listNames.push(pessoa.name);
        }
        console.timeEnd('for');    
        
            
        console.time('forin');
        for (let i in result.results) {
                const pessoa = result.results[i];
                listNames.push(pessoa.name)
        }
        console.timeEnd('forin');


        console.time('forof')
        for (let pessoa of result.results) {
            listNames.push(pessoa.name);
        }
        console.timeEnd('forof');




           
           
            console.log('RESULTADO: ', listNames); 
     

    } catch (error) {
        console.error('DEU RUIM: ', error);
    }

}
main();