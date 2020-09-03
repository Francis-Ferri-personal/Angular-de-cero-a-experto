import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activado: boolean): string {
    if (activado){
      let password: string = ""
      for (let i = 0 ; i < value.length; i++){
        password += "*"
      }
      return password;
    }
    return value;
  }

}
