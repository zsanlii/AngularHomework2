import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]',
  standalone: true,
})
export class AppNoCharacterInputDirective {
  
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: KeyboardEvent) {
    const initialValue = this.el.nativeElement.value;
    const sanitizedValue = initialValue.replace(/[0-9]/g, ''); 
    if (initialValue !== sanitizedValue) {
      this.el.nativeElement.value = sanitizedValue;
      event.stopPropagation();
    }
  }
 }
