import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insta',
  template: `
  <div class="row well">
  <div class="col-md-12">
      Value of date in Insta is {{token}}
  </div>
</div>
  `,
  styles: []
})
export class InstaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
