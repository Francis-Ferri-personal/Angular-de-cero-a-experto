

function saludar( nombre: string ) {
    console.table( 'Hola ' + nombre ); // Hola Logan
}


const wolverine = {
    nombre: 'Logan'
};


saludar( wolverine.nombre );

// Funcion anonima autoinvocada
(function(){
    function saludar( nombre: string ) {
        console.table( 'Hola ' + nombre ); // Hola Logan
    }
    
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    
    saludar( wolverine.nombre );
})();