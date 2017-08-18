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
this.em.emit( `${new Date().toString()}`)

}



}
