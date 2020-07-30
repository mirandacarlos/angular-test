import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private route: ActivatedRoute, 
    private location: Location,
    private gnomeService: GnomeService
  ) { }
  
  ngOnInit(): void {
    this.getGnome();
  }

  getGnome(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gnomeService.getGnome(id)
      .subscribe((gnome: Gnome) => this.gnome = gnome);
  }

  goBack(): void {
    this.location.back();
  }
  
}
