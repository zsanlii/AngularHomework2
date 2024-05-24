import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class AppButtonDirective {
 
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#8b008b');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '15px 32px');
    this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-block');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '16px');
    this.renderer.setStyle(this.el.nativeElement, 'margin', '4px 2px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
  }
 }
