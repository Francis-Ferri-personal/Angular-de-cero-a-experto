import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, noMostrar: boolean = false): string {
    
    return (noMostrar)? "*".repeat(value.length): value;
    /* if (activado){
      let password: string = ""
      for (let i = 0 ; i < value.length; i++){
        password += "*"
      }
      return password;
    } */
  }

}
