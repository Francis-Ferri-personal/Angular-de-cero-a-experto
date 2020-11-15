import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) { }

   cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy("fecha", "desc").limit(5));
    // Este es un observable te puedes cersiorar viendo que tienen el metodo .subscribe
    return this.itemsCollection.valueChanges().pipe(
      map(
        (mensajes: Mensaje[]) => {
          this.chats = [];
          for (let mensaje of mensajes){
            // inserta al inicio
            this.chats.unshift(mensaje);
          }
          return this.chats;
        }
      )
    );
   };

   agregarMensaje(texto: string){
     // TODO: falta el UID del usuario
     let mensaje: Mensaje = {
      nombre: "Demo",
      mensaje: texto,
      fecha: new Date().getTime()
     }
     // Regresa una promesa
     return this.itemsCollection.add(mensaje);
   }

}
