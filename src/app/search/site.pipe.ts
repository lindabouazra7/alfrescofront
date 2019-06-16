import { Pipe, PipeTransform } from '@angular/core';
import {a} from '@angular/core/src/render3';

@Pipe({
  name: 'site'
})
export class SitePipe implements PipeTransform {

  transform(listSites: any, rech?: string) {
    console.log(rech)
    console.log(listSites)
    if(rech==undefined){
      return listSites
    }
    return listSites.filter(
    listSites=>listSites.title.includes(rech)

    )
  }

}
