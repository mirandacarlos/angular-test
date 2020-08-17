import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Gnome } from "../gnome";
import { GnomeService } from "../gnome.service";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.scss']
})
export class GnomeDetailComponent implements OnInit {
  
  gnome: Gnome;
  
  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private gnomeService: GnomeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  ngOnInit(): void {
    this.getGnome();
  }

  getGnome(): void {
    this.gnomeService.getGnome(+this.data.id)
      .subscribe((gnome: Gnome) => this.gnome = gnome);
  }

  goBack(): void {
    this.location.back();
  }
  
}
