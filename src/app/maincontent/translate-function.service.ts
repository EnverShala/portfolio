import { Injectable } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class TranslateFunctionService {
  currentLanguage: string = 'en';

  constructor(public translate: TranslateService) {}

  changeLanguage(language: string ) {
    this.currentLanguage = language;    
    this.translate.use(language);
  } 

}
