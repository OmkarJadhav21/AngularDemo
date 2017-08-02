import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
imgEm:EventEmitter<any>
  constructor() {
    this.imgEm=new EventEmitter<any>();
   }

  ngOnInit() {
  }
sender(imgNm: any){
  this.imgEm.emit(imgNm);
}
}
