import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild("lista") lista: IonList;
  @Input() terminada = true;

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
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

  borrarLista(lista: Lista){
    this.deseosService.borrarLista(lista);
  }

  async cambiarNombreLista(lista: Lista){
    /* const url = ["/tabs", "tab1", "agregar"]
    this.router.navigate(url); */

    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: "titulo",
          type: "text",
          value: lista.titulo,
          placeholder: "Nombre de la lista"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancelar");
            this.lista.closeSlidingItems();
          }
        },
        {
          text: "Actualizar",
          handler: (data) => {
            console.log(data);
            if(data.titulo.length === 0){
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    await alert.present();
  }

}
