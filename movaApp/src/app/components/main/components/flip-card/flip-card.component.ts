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


  public playAudio(item: any) {
    let audio = new Audio();
    audio.src = item.sound;
    audio.load();
    audio.play();
  }
}
