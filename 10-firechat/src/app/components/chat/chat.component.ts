import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service'; 


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje: string ="";

  constructor(public _chatService: ChatService) { }

  ngOnInit(): void {
    this._chatService.cargarMensajes().subscribe(
      
    );
  }

  enviar_mensaje(){
    if (this.mensaje.length === 0){ return; }
    this._chatService.agregarMensaje(this.mensaje)
      .then(() => {this.mensaje = ""})
      .catch((error) => {console.error("Error al enviar", error)});
  }

}
