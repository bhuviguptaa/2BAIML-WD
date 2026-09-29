const eventEmitter = require('events');
const cd = new eventEmitter();
cd.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});
cd.on('exit', (num) => {
    console.log(`Exiting, ${num}`);
})
cd.emit('greet', 'bhuvi');
cd.emit('exit', 10);