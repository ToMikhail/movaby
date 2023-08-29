import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/main/components/about/about.component';
import { ColorCardDeckComponent } from './components/main/components/color-card-deck/color-card-deck.component';
import { ContactComponent } from './components/main/components/contact/contact.component';
import { CourseComponent } from './components/main/components/course/course.component';
import { InfoComponent } from './components/main/components/info/info.component';
import { WordsGameComponent } from './components/main/components/words-game/words-game.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
    children: [
      {
        path: 'colors',
        component: ColorCardDeckComponent,
      },
      { path: 'colors/check', component: WordsGameComponent },
      { path: 'animals', component: ColorCardDeckComponent },
      { path: 'plants', component: ColorCardDeckComponent },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
  },


  // { path: ‘**’, component: RouteNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
