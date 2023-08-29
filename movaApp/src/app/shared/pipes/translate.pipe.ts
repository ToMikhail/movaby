import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value: string): unknown {
    const keyArray = value.split('.');
    let title = this.translateService.data;
    for (let i = 0;  i < keyArray.length; i++) {
      title = title[keyArray[i]];
    }
    return title;
  }

}
