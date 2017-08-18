import { Component, OnInit,OnChanges } from '@angular/core';
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
r;

  constructor(
    private ser:ServiceDIService
  ) { }

  ngOnInit() {
    // this.dt="valse"
  // this.xy=this.ser.nm;

    this.ser.dtlistner(r => {
      //console.log(dt);
      this.r = r.date,
      this.dt=r.day
    });
 
  }

  onclick2(){
this.ser.newf2();
  }
  

  onclick(){
    //this.ser.np=new Date()
this.ser.newf(); 
this.xy=this.ser.nm; 
  }

}
