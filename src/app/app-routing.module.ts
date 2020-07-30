import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnomesGridComponent } from "./gnomes-grid/gnomes-grid.component";
import { GnomeDetailComponent } from "./gnome-detail/gnome-detail.component";


const routes: Routes = [
  { path: '', redirectTo: '/gnomes', pathMatch: 'full' },
  { path: 'gnomes', component: GnomesGridComponent },
  { path: 'detail/:id', component: GnomeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
