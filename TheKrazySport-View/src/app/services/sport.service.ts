import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cap } from '../models/cap.model';
import { Velo } from '../models/velo.model';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private baseUrl = 'http://localhost:8080/sport';

  constructor(private http: HttpClient, 
    private router: Router){}

  public addVelo(velo: Velo): Observable<Velo>{
    return this.http.post<Velo>(`${this.baseUrl}`+'/velo', velo);
  }

  public addCap(cap: Cap): Observable<Velo>{
    return this.http.post<Cap>(`${this.baseUrl}`+'/cap', cap);
  }

  public allSports(): Observable<Velo>{
    return this.http.get<Velo>(`${this.baseUrl}`);
  }
}
