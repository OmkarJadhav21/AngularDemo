import { Injectable,EventEmitter } from '@angular/core';


@Injectable()
export class ServiceDIService {
  nm:any
  np:any
  private em : EventEmitter<any>
  constructor() { this.nm= "myvalueeee";
  this.em = new EventEmitter<any>();
  }


newf(){

this.nm=new Date();

}

newf2(){
  this.em.emit( {
    date :`${new Date().toString()}`, 
    day :`monday`
  })
}



dtlistner(callback:any){
  this.em.subscribe(s =>{
    callback(s);
  })


}


}
