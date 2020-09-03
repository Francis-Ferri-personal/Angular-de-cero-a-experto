import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Capitan America";
  nombre2: string = "fRAnCIS MiCaEL FerRI ripaLDa";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;

  idioma: string = "fr";
  videoUrl: string = "https://www.youtube.com/embed/8dA2yVsUO0c";

  valorPromesa = new Promise<string>((res, rej)=> { 
      setTimeout(() => {
        //rej("llego la data");
        res("llego la data");
      }, 4500);
  });

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: 20
    }
  }


}
