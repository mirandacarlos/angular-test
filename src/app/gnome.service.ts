import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from 'rxjs';
import { Gnome } from "./gnome";

@Injectable({
  providedIn: 'root'
})
export class GnomeService {

  private gnomesUrl = 'https://raw.githubusercontent.com/'
  + 'rrafols/mobile_test/master/data.json';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getGnomes(): Observable<Gnome[]> {
    return this.http.get<Gnome[]>(this.gnomesUrl);
  }
}
