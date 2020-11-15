import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: any[] = [];

  constructor(private afs: AngularFirestore) { }
  
   cargarMensajes(){
    this.itemsCollection = this.afs.collection<any>('chats');
    // Este es un observable te puedes cersiorar viendo que tienen el metodo .subscribe
    return this.itemsCollection.valueChanges();
   }
}
