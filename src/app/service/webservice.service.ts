import { Injectable } from '@angular/core';

@Injectable()
export class WebserviceService {
token:String;
  constructor() { }
  
getToken(){
  this.token=" "+new Date().getMilliseconds();
  return this.token
}
}
