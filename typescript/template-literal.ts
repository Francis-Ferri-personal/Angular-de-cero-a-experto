(function(){

    function getEdad(){
        return 100 + 100 + 300;
    }

    const nombre = "Francis";
    const apellido = "Ferri";
    const edad = 22;
     
    // Mala manera
    const salida = nombre + " " + apellido + " ( " + edad + " )";
    console.log(salida);
    
    const salidaTemplate = `${nombre} \n${apellido} \n( ${getEdad() + 100} )`;
    console.log(salidaTemplate);
    
})();

