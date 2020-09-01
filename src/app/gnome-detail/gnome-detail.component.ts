import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Gnome } from "../gnome";
import { GnomeService } from "../gnome.service";

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.scss']
})
export class GnomeDetailComponent implements OnInit {
  
  gnome: Gnome;
  
  constructor(
    private gnomeService: GnomeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  ngOnInit(): void {
    this.getGnome(this.data.id);
  }

  getGnome(id: number): void {
    this.gnomeService.getGnome(id)
      .subscribe((gnome: Gnome) => this.gnome = gnome);
  }
  
}
