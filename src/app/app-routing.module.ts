import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnomesGridComponent } from "./gnomes-grid/gnomes-grid.component";
import { DialogEntryComponent } from './dialog-entry/dialog-entry.component';


const routes: Routes = [
  { path: '', redirectTo: '/gnomes', pathMatch: 'full' },
  { path: 'gnomes', component: GnomesGridComponent, children:[{
    path: 'detail/:id', component: DialogEntryComponent
  }] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
