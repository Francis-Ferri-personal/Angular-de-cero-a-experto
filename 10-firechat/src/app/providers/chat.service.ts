import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(
    private afs: AngularFirestore,
    public auth: AngularFireAuth
  ) { 
    this.auth.authState.subscribe(
      user => {
        console.log("Estadod el ususario", user);
        if(!user){ return; }
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      }
    );
  }

  login(proveedor: string) {
    if(proveedor === "google"){
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else {
      this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }

  logout() {
    this.usuario = {};
    this.auth.signOut();
  }

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
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
     }
     // Regresa una promesa
     return this.itemsCollection.add(mensaje);
   }

}
