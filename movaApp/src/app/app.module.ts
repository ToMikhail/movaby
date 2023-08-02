import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppHeaderComponent } from './components/header/header.component';
import { AppFooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { FlipCardComponent } from './components/main/components/flip-card/flip-card.component';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    // AppFooterComponent,
    // FlipCardComponent,
    // MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatSlideToggleModule,
    AppHeaderComponent,
    // MainComponent,
    // FlipCardComponent,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
