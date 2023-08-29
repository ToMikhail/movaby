import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  public data: any = {};
  public lang: string = 'en';

  constructor(private http: HttpClient, private router: Router) {}

  public use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve) => {
      console.log('lang:', lang);
      const langPath = `assets/i18n/${lang || 'en'}.json`;

      this.http.get(langPath).subscribe(
        (response) => {
          this.data = response || {};
          console.log('service:', this.data);
          resolve(this.data);
        },
        (err) => {
          this.data = {};
          console.log('service:', this.data);
          resolve(this.data);
        }
      );
    });
  }

  public switch(): Promise<{}> {
    return new Promise<{}>((resolve) => {
      if (this.lang === 'en') {
        this.lang = 'by';
        const langPath = `assets/i18n/${this.lang}.json`;

        this.http.get(langPath).subscribe((response) => {
          this.data = response || {};
          resolve(this.data);
        });
      } else {

        this.lang = 'en';
        const langPath = `assets/i18n/${this.lang}.json`;
        console.log('langPath : ', langPath);
        this.http.get(langPath).subscribe((response) => {
          this.data = response || {};
          resolve(this.data);
        });
      }
    });
  }

}
