import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App {

  constructor(private lang: LanguageService) { }

  setLang(lang: string) {
    this.lang.switchLang(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}

