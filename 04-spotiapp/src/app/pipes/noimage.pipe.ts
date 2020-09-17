import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  imagenDefecto = 'assets/img/noimage.png';

  transform(images: any[]): string {
    if(!images){
      return this.imagenDefecto;
    } else if (images.length > 0){
      return images[0].url;
    }
    return this.imagenDefecto;
  }

}
