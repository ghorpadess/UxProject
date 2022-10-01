import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchItem: any): any {
    return value.filter(function (search: any) {
      return search.name.toLowerCase().indexOf(searchItem.toLowerCase()) > -1;
    });
  }

}
