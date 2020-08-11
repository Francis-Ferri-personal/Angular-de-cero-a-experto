(() => {

    
    console.log("Iniccio");
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Se termino el timeout");
            reject("Se termino el timeout");
        }, 1000);
    });



    prom1
        .then(mensaje => console.log(mensaje))
        .catch(error => console.warn(error))
    
    
    console.log("Fin");
    
})();

