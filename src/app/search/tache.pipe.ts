import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tache'
})
export class TachePipe implements PipeTransform {
  transform(value: any, args?: string){
    console.log(args)
    console.log(value)
    if(args==undefined){
      return value
    }
    return value.filter(
      value=>value.entry.id.includes(args)

    )
  }
}
