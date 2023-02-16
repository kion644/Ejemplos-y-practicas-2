const usuario = {
     nombre : "Lio" ,
     apellido : "Lombardi" ,
     edad : 20 ,
    hobbies : { hobbies : "leer, programar, correr"}  ,
    direccion : {
        calle : "Boedo 1629" ,
        ciudad : "Quilmes" ,
        provincia : "Buenos Aires"}
}
console.log ("Los datos del usuario son: " , usuario) ;

function nombre_completo () {
    return "Lionel Lombardi"
}
console.log (nombre_completo())


const user1 = {
    name: "Abril" ,
    lastname: "Tisera" ,
    age: 18 ,
    showfullname() {
    
        return this.name + " " + this.lastname
    }
}

console.log(user1.showfullname())

const cuenta_bancaria = {
    numero: "123123123123" ,
    activos: 200 ,
    depositar(cantidad) {
        this.activos = this.activos + cantidad
    },
    retirar(cantidad_a_retirar) {
        this.activos = this.activos - cantidad_a_retirar
    }
}
cuenta_bancaria.depositar(100) ;
console.log (cuenta_bancaria.activos) ;
cuenta_bancaria.retirar(50) ;
console.log (cuenta_bancaria.activos) ;

//TODO FUNCIONA HASTA ACA

//ESTO es un constructor de objetos FUNCIONA MAS O MENOS A PARTE DE FULLNAME
function Persona( ) {
    this.name = ""
    this.lastname = ""
    this.age = 0 
    this.fullname = function () {
        return $(this.name) + $(this.lastname) ;
    }
}
/* El comando "new" sirve para crear un objeto que este basado en la
plantilla que se basa la funcion.MUY IMPORTANTE SIEMPRE
USAR EL COMANDO "NEW" para crear constructos nuevos Por ejemplo*/

const user2 = new Persona()
user2.name = "Elias"
user2.lastname = "Alcaraz"
user2.age = 21

console.log (user2) 
console.log (user2.fullname) 

//asociacion:
const padre = 'Cristian' ;
user2.padre = padre ;
console.log (user2)

//con el comando PUSH podemos agregar variables a una funcion
/* EJEMPLO: Compañia.empleados.push (Nombres de empleados)*/

//tambien esta el comando EXTENDS que es para eredar

/* Para mas info seguir viendo el video "Curso de javascript 
orientado a objetos para principiantes" */

class xd {
    constructor (name , lastname) {
    this.name = name
    this.lastname = lastname
    }
}


