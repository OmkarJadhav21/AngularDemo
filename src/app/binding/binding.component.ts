import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})

export class BindingComponent implements OnInit {
dt:String
mytype='text';
defineType="text"
brd:String;
private nm:String;
private nm1:String;

@ViewChild('myLocal')
private myLocal:ElementRef

@ContentChild('FromAppCompo')
private FromAppCompo:ElementRef

constructor() {   }

  ngOnInit() {
  }
eventb(){
  this.dt=new Date().toString()
}
onType(){
  this.mytype="button"
}
onTxt2(){
  if(this.defineType=='text'){
     this.defineType="button"
      }
  else {
     this.defineType="text"}
}
Vwchld(){
this.nm=this.myLocal.nativeElement.value
   }
ContChld(){
  this.nm1=this.FromAppCompo.nativeElement.value
}
}
