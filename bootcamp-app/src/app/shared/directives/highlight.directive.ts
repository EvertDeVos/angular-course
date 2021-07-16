import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter')
  public onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.highlight('');
  }

  public constructor(private el: ElementRef) {}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
