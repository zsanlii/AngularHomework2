import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../../service/translation.service';


@Pipe({
  name: 'translate',
  standalone:true,
})
export class TranslatePipe implements PipeTransform {

  constructor(private translationService: TranslationService) {}

  transform(key: string, language: string): string {
    return this.translationService.translate(key, language);
  }
}