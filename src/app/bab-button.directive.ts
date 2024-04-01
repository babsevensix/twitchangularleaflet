import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBabButton]',
  standalone: true
})
export class BabButtonDirective {

  constructor(private element: ElementRef, 
              private render: Renderer2) {
    // element.nativeElement.style = "color: red";
    
  }

  @HostListener('mouseenter') mouseEnter(): void{
    //this.render.setStyle(this.element.nativeElement, 'color', 'red');
    this.colorValue = 'red';
    this.classValue='font-normal';
  }

  @HostListener('mouseleave') mouseLeave(): void{
    //this.render.removeStyle(this.element.nativeElement, 'color');
    this.classValue = 'font-bold';
    this.colorValue = '';
  }

  @HostBinding('style.color') colorValue: string = '';

  @HostBinding('class') classValue: string = '';
}
