import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit {

  @Input('appForEm')
  numbers: number[] = [1,2,3,4,5];

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {

  }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }

}
