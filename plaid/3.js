let message = 'Hello_World';

message.replace('_', ' ');

console.log(message);

// 'Hello World'

// 'Hello_World'
// ^^^ .replace doesn't edit in place, it returns a string. message is not modified

// undefined