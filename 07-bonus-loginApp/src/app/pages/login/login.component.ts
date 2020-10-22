import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  login(form: NgForm){
    if(form.invalid){return;}

    Swal.fire({
      allowOutsideClick: false, 
      text: "Espere por favor...",
      icon: "info"
    });
    
    this.authService.login(this.usuario).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error.error.error.message);
      }
    )
    
    
  }

}
