import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BindingComponent } from './binding/binding.component';
import { InterCompCommuComponent } from './binding/inter-comp-commu.component';
import { HostbindComponent } from './hostbind/hostbind.component';
import { HostDirDirective } from './hostbind/host-dir.directive';
import { StructDirctvComponent } from './struct-dirctv/struct-dirctv.component';
import { CustmStrutDirctvComponent } from './custm-strut-dirctv/custm-strut-dirctv.component';
import { CustmDirctvDirective } from './custm-strut-dirctv/custm-dirctv.directive';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarRatingModule } from 'angular-star-rating';
import { RatingModule } from "ngx-rating";
import { LifcycleComponent } from './lifcycle/lifcycle.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NgProgressModule } from 'ng2-progressbar';
import { ServiceComponent } from './service/service.component';
import { MagicDirective } from './magic.directive';
import { FacebookComponent } from './service/facebook.component';
import { InstaComponent } from './service/insta.component';
import { WebserviceService } from "./service/webservice.service";


@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BindingComponent,
    InterCompCommuComponent,
    HostbindComponent,
    HostDirDirective,
    StructDirctvComponent,
    CustmStrutDirctvComponent,
    CustmDirctvDirective,
    TableComponent,
    StarRatingComponent,
    LifcycleComponent,
    ProgressBarComponent,
    ServiceComponent,
    MagicDirective,
    FacebookComponent,
    InstaComponent,
   
      
  ],
  imports: [
    BrowserModule,
     FormsModule, 
     Ng2TableModule,
     StarRatingModule,
     RatingModule,
     NgProgressModule
  ],
  providers: [WebserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
