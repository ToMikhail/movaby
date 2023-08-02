import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import colors from 'src/assets/mocks/words/colors/colors.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // standalone: true,
  // imports: [MatTabsModule],
  // imports: [CommonModule, RouterOutlet, MatTabsModule, FlipCardComponent],
})
export class MainComponent {

  public cards = colors;

  constructor() {
    // this.cards = colors;
    console.log('colors: ', colors);
  }

}

// bootstrapApplication(MainComponent, {
//   providers: [provideRouter(routes)],
// });
