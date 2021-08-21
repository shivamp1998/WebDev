import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
   if(!condition) {
     this.viewRef.createEmbeddedView(this.tempRef);
   }else{
     this.viewRef.clear();
   }
  }
  constructor(private tempRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}
