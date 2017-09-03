import { Component } from '@angular/core';
import { WebserviceService } from "./service/webservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WebserviceService]
})
export class AppComponent {

}
