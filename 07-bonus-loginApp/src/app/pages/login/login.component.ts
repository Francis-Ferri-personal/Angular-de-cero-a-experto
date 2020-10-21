import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
