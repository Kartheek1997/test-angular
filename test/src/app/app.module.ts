import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EstimateinfoComponent } from './estimateinfo/estimateinfo.component';
import { ViewComponent } from './view/view.component';
import { RefferenceComponent } from './refference/refference.component';


@NgModule({
  declarations: [
    AppComponent,
    EstimateinfoComponent,
    ViewComponent,
    RefferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
