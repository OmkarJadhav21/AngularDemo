import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-inter-comp-commu',
  template: `
  <div class="row">
     <div class="col-md-12" [class.well]="isWork">
       This is how<b> Custom Input</b> works in Databinding...
     </div>
   </div>
  `,
  styles: []
})
export class InterCompCommuComponent implements OnInit {
@Input()
  isWork: boolean;

  constructor() { }

  ngOnInit() {
  }

}
