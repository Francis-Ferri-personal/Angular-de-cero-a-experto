import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.forma = this.formBuilder.group({
      // [Valor por defecto,  Validadores sincronos, Validadores asincronos]
      nombre: ["Francis"],
      apellido: ["Ferri"],
      correo: ["francis.ferri@gmail.com"]
    });
  }

  guardar(){
    console.log(this.forma);
  }

}
