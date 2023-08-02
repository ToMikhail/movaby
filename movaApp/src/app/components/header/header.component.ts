import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class AppHeaderComponent {


  public doSomething() {
    console.log('hello');
  }
}
