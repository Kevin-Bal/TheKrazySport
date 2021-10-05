import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Velo } from './velo.model';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private baseUrl = 'http://localhost:8080/sport';

  constructor(private http: HttpClient, 
    private router: Router){}

  addVelo(velo: Velo): Observable<Velo>{
    return this.http.post<Velo>(`${this.baseUrl}`+'/velo', velo);
  }
}
