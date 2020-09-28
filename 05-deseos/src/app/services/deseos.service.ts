import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { 
    this.cargarStorage();
  }


  crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  borrarLista(lista: Lista){
    this.listas = this.listas.filter(listaData => lista.id !== listaData.id );
    this.guardarStorage();
  }

  obtenerLista(id: string | number){
    id = Number(id);
    return this.listas.find((lista) => lista.id === id)
  }

  guardarStorage(){
    localStorage.setItem("data",JSON.stringify(this.listas));
  }

  cargarStorage(){
    const listaLS = localStorage.getItem("data");
    if(listaLS){
      this.listas = JSON.parse(listaLS);
    }
  }
}
