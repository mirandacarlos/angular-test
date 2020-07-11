import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MdcImageListModule } from '@angular-mdc/web/image-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GnomesGridComponent } from './gnomes-grid/gnomes-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GnomesGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdcImageListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
