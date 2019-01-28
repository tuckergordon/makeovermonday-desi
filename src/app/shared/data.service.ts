import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Desi } from './models/desi.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<Desi[]> {
    return this.http.get<Desi[]>('assets/data/DESI.json');
  }
}
