import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent";
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() defaultBackground: string = 'transparent';
  @Input() newBackground: string = this.defaultBackground;
  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','red');
    this.backgroundColor = this.defaultBackground;
  }
  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'yellow');
    this.backgroundColor = this.newBackground;
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','orange');
    this.backgroundColor = this.defaultBackground;
  }

}
