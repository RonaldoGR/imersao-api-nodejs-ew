const { rejects } = require('node:assert');
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {

}
const myEmitter = new MyEmitter();
const eventName = 'user:click';

myEmitter.on(eventName, (click) => {
    console.log('usuário clickou ', click);
})

// myEmitter.emit(eventName, 'na barra de rolagem')
// myEmitter.emit(eventName, 'no ok')

// let count = 0;
// setInterval(() => {
//     myEmitter.emit(eventName, 'no ok ' + (count++));
// }, 1000);

const stdin = process.openStdin();
function main () {
    return new Promise((resolve, reject) => {
        stdin.addListener('data', (value) => {
            // console.log(`Você digitou: ${value.toString().trim()}`);
            return resolve(value);
        });

    });
}

main().then((result) => {
    console.log(result.toString());
});