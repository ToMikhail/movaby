import { Component } from '@angular/core';
import { TranslateService } from '../../shared/services/translate.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(translateService: TranslateService) {
    translateService.data;
  }
}
