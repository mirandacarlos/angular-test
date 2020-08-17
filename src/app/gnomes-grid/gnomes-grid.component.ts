import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";

import { Gnome } from "../gnome";
import { GnomeService } from "../gnome.service";
import { GnomeDetailComponent } from '../gnome-detail/gnome-detail.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gnomes-grid',
  templateUrl: './gnomes-grid.component.html',
  styleUrls: ['./gnomes-grid.component.scss']
})
export class GnomesGridComponent implements OnInit, OnDestroy {

  gnomes: Gnome[];

  // MatPaginator Inputs
  length: number = 10;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 50, 100];
  
  // MatPaginator Output
  pageEvent: PageEvent;

  routeQueryParams$: Subscription;

  constructor(
    private gnomeService: GnomeService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.routeQueryParams$ = route.queryParams.subscribe(params => {
      if (params['id']){
        this.openDialog(params['id']);
      }
    })
  }

  ngOnInit(): void {
    this.getGnomes();
  }

  ngOnDestroy() {
    this.routeQueryParams$.unsubscribe();
  }

  getGnomes(): void {
    this.gnomeService.getGnomes()
      .subscribe((gnomes: Gnome[]) => {
        this.length = gnomes.length;
        this.gnomes = gnomes.slice(
          this.pageEvent ? this.pageEvent.pageIndex * this.pageEvent.pageSize : 0, 
          this.pageEvent ? (this.pageEvent.pageIndex + 1) * this.pageEvent.pageSize : 10
        );
      });
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(GnomeDetailComponent, {
      height: '90%',
      width: '90%',
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.router.navigate(['.'], {relativeTo: this.route})
    });
  }
}