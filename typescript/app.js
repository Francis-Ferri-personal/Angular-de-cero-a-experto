function saludar(nombre) {
    console.table('Hola ' + nombre); // Hola Logan
}
var wolverine = {
    nombre: 'Logan'
};
saludar(wolverine.nombre);
// Funcion anonima autoinvocada
(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
})();
