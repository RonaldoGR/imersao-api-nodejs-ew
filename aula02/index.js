/*
 0 - Obter um usuário
 1 - Obter o número de telefone de um usuário a partir de seu ID
 2 - Obter o endereco de usuario pelo ID

 Funções aninhadas = CallbackHell
*/ 
// importamos um módulo do node.js


const util = require('node:util');

const getAddressAsync = util.promisify(getAddress);



 function getUser() {
    // quando der algum problema -> reject (ERRO)
    // quando sucess -> resolve (SUCESSO)
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            // return reject(new Error("DEU RUIM DE VERDADE!"));

            return resolve({
                id: 1,
                name: "Aladin",
                dateOfBirth: new Date()
            })
        }, 1000);
        
    })

}

function getPhone (idUser) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                number: "110005465",
                ddd: 53
            })
        }, 2000);
    });
    

}

function getAddress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            street: "street test",
            number: 0
        }),
    2000 });
}

// 1º passo: adicionar 'async' na função -> automaticamente ela retornará uma Promise

async function main () {
    try {
        console.time('medida-promise');
        const user = await getUser();
        // const phone = await getPhone(user.id);
        // const address = await getAddressAsync(user.id);
        const resultado = await Promise.all([
            getPhone(user.id),
            getAddressAsync(user.id)
        ]);
        const address = resultado[1];
        const phone = resultado[0];
        console.log(`
                      Nome: ${user.name}
                      Phone: (${phone.ddd}) ${phone.number}
                      Address: ${address.street} ${address.number}
                    `);        
        console.timeEnd('medida-promise');            
    } catch (error) {
        console.error("DEU RUIM: ", error);
    }
}

main();





// const userPromise = getUser();
// // para manipular o sucesso usamos a função .then
// // para manipular erros usamos o .catch
// //usuario => telefone => telefone

// userPromise
//     .then((user) => {
//         return  getPhone(user.id)
//             .then((result) => {
//                 return {
//                     user: {
//                         id: user.id,
//                         name: user.name,
//                         dateOfBirth: user.dateOfBirth
//                     },
//                     phone: result
//                 }
//         })
//     })
//     .then((result) => {
//         const address = getAddressAsync(result.user.id)
//         return address.then((resultAddress) => {
//             return {
//                 user: result.user,
//                 phone: result.phone,
//                 address: resultAddress
//             }
//         })
//     })

//     .then((result) => {
//         console.log(`
//             Nome: ${result.user.name}
//             Phone: (${result.phone.ddd}) ${result.phone.number}
//             Address: ${result.address.street} ${result.address.number}
//             `);
//     })
//     .catch((error) => {
//         console.error("DEU RUIM: ", error);
//     });



// getUser((error, user) => {
//     // error
//     if(error){
//         console.error("DEU RUIM em User: ", error);
//         return;
//     }

//     // callback
//     getPhone(user.id, (error1, phone) => {
//         if (error1) {
//             console.error("DEU RUIM em Phone: ", error1);
//             return;
//         }
//         getAddress(user.id, (error2, address) => {
//             if (error2) {
//                 console.error("DEU RUIM em ADDRESS: ", error2);
//                 return;
//             }
//             console.log(`
//                 Name: ${user.name},\n
//                 Address:  ${address.street}, ${address.number},\n
//                 Phone: ${phone.ddd} ${phone.number}
//               `)
      
//         });
//     });
// });

