import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { 
    this._activatedRoute.params.subscribe(
      (parametros) => {
        console.log("Ruta padre");
        console.log(parametros);
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

  ngOnInit(): void {
  }

}
