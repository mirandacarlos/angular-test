import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Gnome } from "./gnome";

@Injectable({
  providedIn: 'root'
})
export class GnomeService {

  private gnomesUrl = 'https://raw.githubusercontent.com/'
  + 'rrafols/mobile_test/master/data.json';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  gnomes: Observable<Object>;

  constructor(private http: HttpClient) { 
    this.setGnomes();
  }

  setGnomes(): void {
    this.gnomes = this.http.get<Object>(this.gnomesUrl);
  }

  getGnomes(): Observable<Gnome[]> {
    return this.gnomes.pipe(
      map((town: Object) => town[Object.keys(town)[0]])
    );
  }
  
  getGnome(id: number): Observable<Gnome> {
    return this.gnomes.pipe(
      map((town: Object) => town[Object.keys(town)[0]]),
      map((gnomes: Gnome[]) => gnomes.filter(gnome => gnome.id === id)),
      map((gnome: Gnome[]) => gnome[0])
    );
  }
}
