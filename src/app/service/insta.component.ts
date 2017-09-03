import { WebserviceService } from './webservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insta',
  template: `
  <div class="row well">
  <div class="col-md-12">
      Value of date in Insta is {{iToken}}
  </div>
</div>
  `,
  styles: []
})
export class InstaComponent implements OnInit {
  
iToken:String;

  constructor(private web:WebserviceService) { }

  ngOnInit() {
    this.iToken=this.web.token
    this.web.subscribeToken(iToken=>this.iToken=iToken)
  }

}
