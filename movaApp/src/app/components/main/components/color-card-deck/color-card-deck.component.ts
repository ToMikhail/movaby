import { Component } from '@angular/core';
import colors from '../../../../../assets/mocks/words/colors/colors.json';

@Component({
  selector: 'app-color-card-deck',
  templateUrl: './color-card-deck.component.html',
  styleUrls: ['./color-card-deck.component.scss'],
})
export class ColorCardDeckComponent {
  public cards = colors;
}
