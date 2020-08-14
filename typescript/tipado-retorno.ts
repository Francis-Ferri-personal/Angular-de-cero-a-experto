(() => {
    const sumar = (a: number, b: number): number =>  a + b;
    const nombre = (): string => "Hola Francis";
    const obtenerSalario = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve("Francis")

        });
    }

    obtenerSalario()
        .then(a => console.log(a.toUpperCase))

})();



