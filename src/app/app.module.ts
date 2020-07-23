import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MdcImageListModule } from '@angular-mdc/web/image-list';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GnomesGridComponent } from './gnomes-grid/gnomes-grid.component';
import { GnomeDetailComponent } from './gnome-detail/gnome-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GnomesGridComponent,
    GnomeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdcImageListModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
