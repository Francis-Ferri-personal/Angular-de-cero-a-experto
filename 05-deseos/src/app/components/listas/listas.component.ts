import { Component, Input, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(
    public deseosService: DeseosService,
    private router: Router
  ) { }

  ngOnInit() {}

  listaSeleccionada(lista: Lista){
    let tab;
    if(this.terminada){
      tab = "tab2"
    } else {
      tab = "tab1"
    }
    const url = ["/tabs", tab, "agregar", lista.id];
    this.router.navigate(url);
  }

}
