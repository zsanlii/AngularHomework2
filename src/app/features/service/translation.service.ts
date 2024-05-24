import { Injectable } from '@angular/core';
import  translations from './translations.json';
import { Translation } from './translations';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  
    
  private translations:Translation = translations;

  constructor() { }

  translate(key: string, language: string): string {
    if (this.translations.hasOwnProperty(language) && this.translations[language].hasOwnProperty(key)) {
      return this.translations[language][key];
    } else {
      return key; // Çeviri bulunamadığında orijinal anahtarı geri döndür
    }
  }
}