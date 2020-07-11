import { Component, OnInit } from '@angular/core';

import { Gnome } from "../gnome";
import { GnomeService } from "../gnome.service";

@Component({
  selector: 'app-gnomes-grid',
  templateUrl: './gnomes-grid.component.html',
  styleUrls: ['./gnomes-grid.component.scss']
})
export class GnomesGridComponent implements OnInit {

  gnomes: Gnome[];

  constructor(private gnomeService: GnomeService) { }

  ngOnInit(): void {
    this.getGnomes();
  }

  getGnomes(): void {
    this.gnomeService.getGnomes()
      .subscribe(gnomes => this.gnomes = gnomes);
  }

}
