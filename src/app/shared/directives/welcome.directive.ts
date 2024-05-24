import { ChangeDetectorRef, Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]',
  standalone: true,
})
export class WelcomeDirective  {
  @Input() delay: number = 2000; 
  private originalContent: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.originalContent = this.el.nativeElement.innerHTML; 
    this.el.nativeElement.innerHTML = 'Welcome'; 

    setTimeout(() => {
      this.el.nativeElement.innerHTML = this.originalContent;
    }, this.delay);
  }
}
