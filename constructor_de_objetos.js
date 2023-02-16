console.log("Hola") ;

function Persona () {
    this.name = ""
    this.lastname = "" 
    this.age = 0 ;
}
const persona1 = new Persona ()
persona1.name = "Lio"
persona1.lastname = "Lombardi"
persona1.age = 20
console.log (persona1)

/* prototipo, se pueden usar parametros y agregar tambien */

function huumano(name , lastname) {
    this.name = name
    this.lastname = lastname
}
const Lio = new huumano ("Lionel Agustin" , "Lombardi" )
console.log (Lio)

huumano.prototype.saludar = function () {
    return 'Hola, yo soy: ' , this.name
}
console.log (Lio.saludar())

// ALT + 39 = ' - Comando CLASS sirve para hacer un objeto con su funcion y todo pero escrito diferente






