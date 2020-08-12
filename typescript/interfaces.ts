(() => {
    interface Xman{
        nombre: string;
        edad?: number;
    }
    
    // manera de recibir los atributos de un objeto
    const enviarMision = (xman: {nombre: string}) => {
        console.log(`Enviando a ${xman.nombre} a la mision`);
    }

    const enviarMisionInterfaz = (xman: Xman) => {
        console.log(`Enviando a ${xman.nombre} a la mision`);
    }

    const wolverine: Xman = {
        nombre: "Logan",
        edad: 60
    }

    enviarMision(wolverine)
    enviarMisionInterfaz(wolverine)
})();



