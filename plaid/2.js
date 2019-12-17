var message = "Hello";

function printMessage() {
  console.log(message);

  var message = "Hola";
}

printMessage();

// Hola

// undefined
// ^^^ function scoped `message` is hoisted before it's assigned, so message is undefined here

// Error

// Hello