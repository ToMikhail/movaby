import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import colors from '../../../../../assets/mocks/words/colors/colors.json';

@Component({
  selector: 'app-words-game',
  templateUrl: './words-game.component.html',
  styleUrls: ['./words-game.component.scss'],
})
export class WordsGameComponent {
  public items = colors;
  public color?: string;
  public isShaking: boolean = false;
  private colorName?: string = '';
  private randomNumber?: number;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    this.getBackground(this.items);
  }

  public checkWord(event: any) {
    if(event.target.innerHTML === this.colorName) {
      this.getBackground(this.items);
      this.items = this.items.sort(() => 0.5 - Math.random());
    }

    else {
      event.target.classList.add('shaken');
      window.setTimeout(() => event.target.classList.remove('shaken'), 200);
    }
  }

  public getBackground(colors: any) {
    this.randomNumber = this.getRandomInt(this.items.length);
    this.colorName = colors[this.randomNumber].title;
    return this.color = colors[this.randomNumber].color
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
