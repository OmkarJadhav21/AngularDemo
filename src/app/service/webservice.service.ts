import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class WebserviceService {
token:String;
em:EventEmitter<String>

  constructor() { 
    this.em=new EventEmitter<String>();
  }

getToken(){
  this.token=" "+new Date().getMilliseconds();
  this.em.emit(this.token);
  return this.token
}
subscribeToken(myVar:any){
  this.em.subscribe(StrTkn=>{
    myVar(StrTkn)
  })

}
}
