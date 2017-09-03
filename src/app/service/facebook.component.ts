import { WebserviceService } from './webservice.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-facebook',
  template: `
  <div class="row well">
  <div class="col-md-12">
      Value of date in Facebook is {{token}}
    <input type="button" class="btn btn-primary pull-right "value="okay" (click)="date()">
  </div>
</div>
  `,
  styles: []
})
export class FacebookComponent implements OnInit {
token:any;
  constructor(private web:WebserviceService) { }

  ngOnInit() {
  }
  date(){
this.token=this.web.getToken();
  }
}
