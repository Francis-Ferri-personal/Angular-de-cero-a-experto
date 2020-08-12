(() => {
    /* class Avenger{
        nombre: string;
        equipo: string;
        nombreReal?: string; // El simbolo de pregunta vuelve opcionales a las instancias
        puedePelear: boolean;
        peleasGanadas: number;
        constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean ){
            this.nombre = nombre;
            this.equipo = equipo;
        }
    } */

    class Avenger{
        
        constructor(
            public nombre: string, 
            public equipo?: string, 
            public nombreReal?: string, 
            public puedePelear: boolean = true, 
            public peleasGanadas: number = 0
        ){}
    }

    const antMan: Avenger = new Avenger("Antman");
    //const antMan = new Avenger(); // No es necesario especificar el tipo pore que se infiere
    console.log(antMan);
    
})();



