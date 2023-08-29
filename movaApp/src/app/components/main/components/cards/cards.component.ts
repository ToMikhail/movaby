import { Component } from '@angular/core';
import  colors  from '../../../../../assets/mocks/words/colors/colors.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  public cards = colors;

}
