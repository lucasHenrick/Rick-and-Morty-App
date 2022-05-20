import { map } from 'rxjs/operators';
import { Episodio } from './../model/Episodio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodioService {

  constructor(private http: HttpClient) { }


  public findEpisodios(url: string): Observable<Array<Episodio>> {
    return this.http.get<any>(url).pipe(map(value => value.results));
  }
}
