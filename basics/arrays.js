// Arrays en JavaScript
const miArray = [1,2,3,4, true, 'Hello', 'A', 2.1, [1,1]]
console.log(miArray);
console.log(miArray[0]);
console.log(miArray[1]);
miArray[0]= "One";
miArray[3] =false;
console.log(miArray);

//  Pilas en JS
// Last in first out
// Ingresar Valores al final
// Extraer valores del final
// pop, shift, unshift , push
const pila = []
// Insertar con push
pila.push(1);
pila.push(2);
pila.push(3);
console.log(pila)
console.log(pila.pop())
console.log(pila)
console.log(pila.pop())
console.log(pila)

// Colas en JS
// first in first out
const cola = []
cola.unshift(1);
cola.unshift(2);
cola.unshift(3);
console.log(cola);
console.log(cola.shift);
console.log(cola);
console.log(cola.shift);
console.log(cola);