import { Component } from '@angular/core';
import { TranslateService } from '../../shared/services/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class AppHeaderComponent {

  public prefix: string = 'HEADER.';

  constructor (private translateService: TranslateService) {}

  public switchLang() {
    this.translateService.switch();
  }
}
