import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    constructor(private translate: TranslateService) {

        this.translate.addLangs(['en', 'ar']);
        this.translate.setDefaultLang('en');

        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');
    }

    switchLang(lang: string) {
        this.translate.use(lang);

        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
}