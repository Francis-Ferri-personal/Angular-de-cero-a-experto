import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("email")){
      this.usuario.email = localStorage.getItem("email");
      this.recordarme = true;
    }
    
  }

  login(form: NgForm){
    if(form.invalid){return;}

    Swal.fire({
      allowOutsideClick: false, 
      text: "Espere por favor...",
      icon: "info"
    });
    Swal.showLoading();
    
    this.authService.login(this.usuario).subscribe(
      resp => {
        console.log(resp);
        Swal.close();
        if(this.recordarme){
          localStorage.setItem("email", this.usuario.email);
        }
        this.router.navigateByUrl("/home");
      },
      error => {
        console.log(error.error.error.message);
        Swal.fire({
          title: "Error al autenticar",
          text: error.error.error.message,
          icon: "error"
        });
      }
    )
    
    
  }

}
