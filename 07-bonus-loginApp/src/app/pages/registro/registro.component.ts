import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm){
    if(form.invalid){return;}

    Swal.fire({
      allowOutsideClick: false, 
      text: "Espere por favor...",
      icon: "info"
    });
    Swal.showLoading();
    
    this.authService.nuevoUsuario(this.usuario).subscribe(
      res => {
        console.log(res);
        Swal.close()
        this.router.navigateByUrl("/home");
      },
      error => {
        console.log(error.error.error.message);
        Swal.fire({
          title: "Error al crear cuenta",
          text: error.error.error.message,
          icon: "error"
        });
      }
    )
    
  }


}
