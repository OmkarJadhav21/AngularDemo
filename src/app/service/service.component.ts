import { Component, OnInit } from '@angular/core';
import { ServiceDIService } from './service-di.service';



@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers:[ServiceDIService]
})
export class ServiceComponent implements OnInit {

private dt:any
private xy:any

  constructor(
    private ser:ServiceDIService
  ) { }

  ngOnInit() {
    // this.dt="valse"
    this.dt=this.ser.nm
 
  }

  onclick(){
    //this.ser.np=new Date()
this.ser.newf();  
  }

}
