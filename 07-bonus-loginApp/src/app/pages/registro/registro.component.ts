import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private authService: AuthService) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm){
    if(form.invalid){return;}
    
    this.authService.nuevoUsuario(this.usuario).subscribe(
      res => {
        console.log(res);
        
      },
      error => {
        console.log(error.error.error.message);
        
      }
    )
    
  }


}
