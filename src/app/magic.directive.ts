import { Directive, Input, HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[Magic]'
})

export class MagicDirective {
@HostBinding('style.border')
border:String

@Input('Magic') 
@HostBinding('style.backgroundColor')
bakcol:String;
 
@HostListener('mouseenter')
  Fun1(){
  this.bakcol=this.magicFun();
  this.border='2px solid white'
  }

  @HostListener('mouseleave')
  Fun2(){
  this.bakcol=this.magicFun();
  this.border='2px solid white'
  }
  magicFun(){
  let red= Math.round(Math.random()*255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
    
  }
  constructor() {
    this.border='3px solid black' }
  
}
