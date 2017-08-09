import { Component, OnInit } from '@angular/core';

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
   
}
