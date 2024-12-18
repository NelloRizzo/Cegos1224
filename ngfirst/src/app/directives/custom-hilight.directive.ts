import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomHilight]'
})
export class CustomHilightDirective {

  @Input()
  hilightColor?: string

  @Input()
  foreground?: string

  originalBackground: string
  originalForeground: string

  constructor(private element: ElementRef) {
    this.originalBackground = element.nativeElement.style.backgroundColor
    this.originalForeground = element.nativeElement.style.color
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hilight(this.hilightColor || 'red', this.foreground || 'white')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hilight(this.originalBackground, this.originalForeground)
  }

  private hilight(backColor: string, color: string) {
    this.element.nativeElement.style.backgroundColor = backColor
    this.element.nativeElement.style.color = color
  }
}
