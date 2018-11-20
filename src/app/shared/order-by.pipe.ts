import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Object[], field: string, desc: boolean = true): any {
    return value.sort((product1, product2) => {  
      if (desc) {
        return product1[field] > product2[field] ? -1 : 1;
      }  
      else {
        return product1[field] > product2[field] ? 1 : -1;
      } 
    });
  }

}
