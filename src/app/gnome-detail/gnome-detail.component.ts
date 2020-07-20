import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Gnome } from "../gnome";

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.scss']
})
export class GnomeDetailComponent implements OnInit {
  
  gnome: Gnome;
  
  constructor(
    private route: ActivatedRoute, 
    private location: Location
  ) { }
  
  ngOnInit(): void {
    this.setGnome();
  }
  
  setGnome(): void{
    let snap = this.route.snapshot.paramMap;
    this.gnome = {
      id: + snap.get('id'),
      name: snap.get('name'),
      height: + snap.get('height'),
      weight: + snap.get('weight'),
      age: + snap.get('age'),
      hair_color: snap.get('hair_color'),
      thumbnail: snap.get('thumbnail'),
      friends: snap.get('friends'),
      professions: snap.get('professions')
    };
  }
  
  goBack(): void {
    this.location.back();
  }
  
}
