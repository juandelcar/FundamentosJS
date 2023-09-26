// Funciones de orden superior
// High Order Funtions
// Funciones que reciben como parametros
// mas funciones

const myFunctionWithBigName = () => {
    console.log('Funcion inicial');
}

console.log(myFunctionWithBigName);
myFunctionWithBigName();

const myFun = myFunctionWithBigName;
myFun();

const funOne = () =>{
    console.log('Ejecuta Función Uno')
} 

const funTwo= (nombre) =>{
    console.log('hi' + nombre)
    console.log('Ejecuta Función Dos');
}

funOne();
funTwo('Juan');

const funThree= (otherFunction) => {
    console.log('Inicia Función Tres');
    otherFunction();
    console.log('Termina Función Tres');
}
funThree(funOne);
funThree( ()=> console.log('Funcion de Flecha'));

