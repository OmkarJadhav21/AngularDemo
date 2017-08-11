import { Directive,OnChanges,Input,ViewContainerRef,TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCustmDirctv]'
})
export class CustmDirctvDirective implements OnChanges{

@Input()
appCustmDirctv:boolean;
constructor(
            private vcRef:ViewContainerRef,
            private tmRef:TemplateRef<any>
          ) { }


  ngOnChanges(){
    if(!this.appCustmDirctv){
      this.vcRef.createEmbeddedView(this.tmRef);

    }else{
      this.vcRef.clear();
    }
  }   

}
