import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
  termino: string
  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => this.termino = params["termino"]);
  }

  ngOnInit(): void {
  }

}
