import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { DeseosService } from '../services/deseos.service';



@NgModule({
  declarations: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ListasComponent
  ],
  providers: [
    DeseosService
  ]
})
export class ComponentsModule { }
