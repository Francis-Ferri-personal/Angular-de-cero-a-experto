(() => {
    const avenger = {
        nombre: "Steve",
        clave: "Capitan America",
        poder: "Droga"
    }

    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);

    // Desestructuracion de objetos
    const {nombre, clave, poder} = avenger;

    console.log(nombre);
    console.log(clave);
    console.log(poder);

    const extraer = ({nombre, clave, poder}: any) => {
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    }
    
    extraer(avenger);

    const avengers: string[] = ["Thor", "Iron man", "Spiderman"];
    const [, , arania] = avengers;


    console.log(arania);
    

    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);

    const extraerArreglo = ([dios,cientifico,]: string[]) => {
        console.log(dios);
        console.log(cientifico);
    }

    extraerArreglo(avengers);
    


})();

