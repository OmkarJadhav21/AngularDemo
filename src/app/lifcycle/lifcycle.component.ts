import { Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifcycle',
  templateUrl: './lifcycle.component.html',
  styleUrls: ['./lifcycle.component.css']
})
export class LifcycleComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  dt:string
  dt1:string

  ngOnInit() {
    this.l('ngOnInit')
  }

  ngOnDestroy() {
    this.l('ngOnDestroy')
  }

  ngOnChanges() {
    this.l('ngOnChanges')
  }
 
  ngAfterViewChecked(){
    this.l('ngAfterViewChecked')
  
  }

  ngAfterViewInit(){
    this.l('ngAfterViewInit')
  }

  ngAfterContentChecked(){
    this.l('ngAfterContentChecked')
  }

  ngAfterContentInit(){
    this.l('ngAfterContentInit')
  }

  ngDoCheck(){
    this.l('ngDoCheck')
  }


  constructor() { }

  onDt(){
    this.dt=''+new Date();
  }
  clear(){
    this.dt1=''+new Date();
  }
  l(msg){
    console.log(msg)
  }
}
