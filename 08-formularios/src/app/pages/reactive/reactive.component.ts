import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validadores: ValidadoresService
  ){ 
    this.crearFormulario();
    this.cargarDataAlFormulario();
  }

  ngOnInit(): void {
  }

  get pasatiempos(){
    return this.forma.get("pasatiempos") as FormArray;
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  
  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }
  
  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }
  
  get distritoNoValido(){
    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched;
  }
  
  get ciudadNoValida(){
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }
  
  get pass1NoValida(){
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }

  get pass2NoValida(){
    const pass1 = this.forma.get("pass1").value;
    const pass2 = this.forma.get("pass2").value;
    return (pass1 === pass2)? false : true;
  }

  crearFormulario(){
    this.forma = this.formBuilder.group({
      // [Valor por defecto,  Validadores sincronos, Validadores asincronos]
      nombre: ["", [Validators.required, Validators.minLength(5)]],
      apellido: ["", [this.validadores.noHerrera, Validators.required, Validators.minLength(5)]],
      correo: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      pass1: ["", [Validators.required]],
      pass2:["", [Validators.required]],
      direccion: this.formBuilder.group({
        distrito: ["", Validators.required],
        ciudad: ["", Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])    
    },{
      validators: [this.validadores.passwordsIguales("pass1", "pass2")]
    });
  }

  cargarDataAlFormulario(){
    // Todos los campos deben tener un valor, si quieres un valor vacio envia solo comillas
    //this.forma.setValue({
    this.forma.reset({
      nombre: "Francis",
      apellido: "Ferri",
      correo: "francisferri@gmail.com",
      direccion: {
        distrito: "Atahualpa",
        ciudad: "Quito"
      }
    });
    ["Comer", "Dormir"].forEach(valor => this.pasatiempos.push(this.formBuilder.control(valor, Validators.required)))     
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.formBuilder.control("", Validators.required))
  }

  borrarPasatiempo(i: number){
    this.pasatiempos.removeAt(i);
  }

  guardar(){
    console.log(this.forma)
    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach(control => {
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control =>  control.markAsTouched())
        } else{
          control.markAsTouched();
        }
        control.markAsTouched();
      })
    };
    // Posteo de informacion
    this.forma.reset({
      nombre: "Sin nombre",
    });
  }


}
