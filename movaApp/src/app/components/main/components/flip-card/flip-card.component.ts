import { CommonModule, NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  // standalone: true,
  // imports: [CommonModule, BrowserModule]
})
// export class FlipCardComponent implements OnInit {
export class FlipCardComponent  {
  @Input() card: any;

  // constructor() {
    // console.log('card is:', this.card);
  // }

  // ngOnInit() {
  //   console.log('userId is:', this.card);
  // }

  public playAudio(item: any) {
    let audio = new Audio();
    audio.src = item.sound;
    audio.load();
    audio.play();
  }
}
