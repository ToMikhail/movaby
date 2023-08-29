import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppHeaderComponent } from './components/header/header.component';
// import { AppFooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './components/main/main.module';
import { TranslateService } from './shared/services/translate.service';
import { TranslatePipe } from './shared/pipes/translate.pipe';


export function setupTranslateServiceFactory(
  service: TranslateService): Function {
return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    // AppFooterComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    SharedModule,
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [
        TranslateService
      ],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
