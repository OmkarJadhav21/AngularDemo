import { Directive,Input,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appHostDir]'
})
export class HostDirDirective {

@Input('appHostDir')
@HostBinding('style.border')
brd:String;

@HostBinding('style.width')
width:String;


@HostListener('mouseenter')
Onenter(){
this.brd='5px solid red';
} 

@HostListener('click')
onClick(){
this.width="500px";
} 

@HostListener('mouseleave')
Onleave(){
  this.brd='1px solid blue';
}
  constructor() {
    // this.brd='3px solid grey';
   }

}
