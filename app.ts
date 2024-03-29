(()=>{

  // Uso de Let y Const
  let nombre = 'Ricardo Tapia';
  let edad = 23;

  // Una propiedad que tiene el mismo valor piede ser declarada con el nombre de variable
  const PERSONAJE = {nombre, edad};


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface Superhero {
    nombre: string;
    artesMarciales: string[];
  }
  const batman: Superhero = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  // Convertir esta funcion a una funcion de flecha
  const resultadoDoble = ( a: number, b: number ) =>  (a + b) * 2

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger( nombre: string, poder?: string, arma: string = "arco" ){
    let mensaje: string;
    if( poder ){
      mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
    }else{
      mensaje = `${nombre} tiene un ${poder}`
    }
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

class Rectangulo {
  constructor(
    private base: number, 
    private altura: number
  ){}

  calcularArea(): number{
    return this.base * this.altura;
  }

  calcularArea2 = (): number =>  this.base * this.altura;
}

})();