import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform(value: any, args?: string){
    console.log(args)
    console.log(value)
    if(args==undefined){
      return value
    }
    return value.filter(
      value=>value.entry.displayName.includes(args)

    )
  }

}
