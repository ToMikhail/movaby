import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { MainComponent } from './main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CardsComponent } from './components/cards/cards.component';
import { ColorCardDeckComponent } from './components/color-card-deck/color-card-deck.component';
import { RouterModule } from '@angular/router';
import { WordsGameComponent } from './components/words-game/words-game.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { CourseComponent } from './components/course/course.component';
import { ContactComponent } from './components/contact/contact.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    MainComponent,
    FlipCardComponent,
    CardsComponent,
    ColorCardDeckComponent,
    WordsGameComponent,
    AboutComponent,
    InfoComponent,
    CourseComponent,
    ContactComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    MainComponent,
    // FlipCardComponent,
  ]
})
export class MainModule { }
