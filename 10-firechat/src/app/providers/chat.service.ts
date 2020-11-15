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
    this.itemsCollection = this.afs.collection<Mensaje>('chats');
    // Este es un observable te puedes cersiorar viendo que tienen el metodo .subscribe
    return this.itemsCollection.valueChanges().pipe(
      map(
        (mensajes: Mensaje[]) => {
          this.chats = mensajes;
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
