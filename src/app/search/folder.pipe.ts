import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'folder'
})
export class FolderPipe implements PipeTransform {

  transform(value: any, args?: string ){
    console.log(args)

    console.log(value)

    if(args==undefined){
      return value
    }
    return value.filter(
      value=>value.entry.name.includes(args),
      value=>value.name.includes(args)



    )
  }


}
