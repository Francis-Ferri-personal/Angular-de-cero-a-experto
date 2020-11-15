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
  elemento: any;

  constructor(public _chatService: ChatService) { 
    this._chatService.cargarMensajes().subscribe(
      () => {
        // Esto lo usamos por que angular renderiza demasiado rapido, por lo cual puede dar errores
        setTimeout(
          () => {this.elemento.scrollTop = this.elemento.scrollHeight}
          ,20
          );
      }
    );
  }

  ngOnInit(): void {
    this.elemento = document.getElementById("app-mensajes");

  }

  enviar_mensaje(){
    if (this.mensaje.length === 0){ return; }
    this._chatService.agregarMensaje(this.mensaje)
      .then(() => {this.mensaje = ""})
      .catch((error) => {console.error("Error al enviar", error)});
  }

}
