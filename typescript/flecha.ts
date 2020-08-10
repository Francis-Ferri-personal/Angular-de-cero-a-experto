(function(){

    const miFuncion = function(a: string){
        return a.toUpperCase();
    }

    function function2(a:string) {
        return a;
    }

    const miFuncionF = (a: string) => {
        return a.toUpperCase();
    }

    // retorna el resultado de la linea ejecutada si no se usu llaves
    const miFuncionF2 = (a: string) => a.toUpperCase();

    const sumarN = function(a: number, b: number){
        return a + b;
    }

    const sumarF = (a: number, b: number) => a + b;

    console.log(miFuncion("Normal"));
    console.log(miFuncionF2("Flecha"));
    console.log(sumarF(5, 7));
    console.log(sumarF(10, 10));
    
    const hulk = {
        nombre: "Hulk",
        smash() {
            setTimeout(() =>{
                console.log(`${this.nombre} smash!!!`);
            },1000);
        }
    }
    hulk.smash();
    
})();

