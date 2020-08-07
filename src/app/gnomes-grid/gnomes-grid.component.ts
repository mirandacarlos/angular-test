import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator";

import { Gnome } from "../gnome";
import { GnomeService } from "../gnome.service";

@Component({
  selector: 'app-gnomes-grid',
  templateUrl: './gnomes-grid.component.html',
  styleUrls: ['./gnomes-grid.component.scss']
})
export class GnomesGridComponent implements OnInit {

  gnomes: Gnome[];

  // MatPaginator Inputs
  length: number = 10;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 50, 100];
  
  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private gnomeService: GnomeService) { }

  ngOnInit(): void {
    this.getGnomes();
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
}
