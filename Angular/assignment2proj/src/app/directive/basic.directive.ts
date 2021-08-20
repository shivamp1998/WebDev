import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[basic-directive]'
})

export class BasicDirective{
  constructor (private elementref: ElementRef) {}

  ngOnInit() {
    this.elementref.nativeElement.style.backgroundColor = "green";
  }
  ngOnChanges() {
    console.log("Some Element Changes");
  }
}
