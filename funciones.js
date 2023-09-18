// Funciones en JavaScript

// funtion nombre(params){
//     body function
// }

// const nombre = function (params){
//     body function
// }
// Funciones sin parametros y sin retornp
function saludo(){
    console.log("HEllooooo!");
}
saludo();

// Funciones con parametros sin retorno 
const saludaA = function(name){
    console.log("Hola " + name)
}
saludaA("Juan");

// Funciones con parametros y con retorno
const fact = function(num) { 
    if(num == 0) return 1;
    return fact(num -1) * num;
}
const result = fact(5);
console.log(result);

// Arrow functions o funciones de flecha
//  Sin parametros y sin retorno
const saludaEnChino = () => {
    console.log("Ni Hao ");
} 

saludaEnChino();

// con 1 parametro sin retorno
const mayuscula = (word) => {
    console.log(word.toUpperCase());
}
mayuscula("hola");

const minuscula = word => {
    console.log(word.toLowerCase);
}
minuscula("HELLO ")

// Dos o mas parametros y con retorno
const fullName = ( firtsName, lastName) => {
    return firtsName + "" + lastName;
}
const nombreCompleto = fullName("Juan", "Del carmen");
console.log(nombreCompleto);

// Si el return es la unica línea se puede simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

// function duplica(num){
//     return num * 2;
// }

// Funciones con parametros opcionales
const welcomeToMexico = (user = 'Invitado') => {
    console.log(`Bienvenido a México ${  user} `);

}
welcomeToMexico();
welcomeToMexico("Batman");

// Parametros con nombre
const welcomeToUtt = ( user = 'Invitado', city = 'México') => {
    console.log (`Bienvenido ${user} de ${city}`)
}

welcomeToUtt();
welcomeToUtt('Bruce Wayne', 'Gotham');
welcomeToUtt( city = 'Metropolis', user= 'Superman');