import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipCardComponent } from './components/main/components/flip-card/flip-card.component';

export const routes: Routes = [
  // {path:  '', pathMatch: 'full', redirectTo: 'colors'},
  // {path:  'colors', component: FlipCardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
