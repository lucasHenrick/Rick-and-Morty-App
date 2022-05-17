import { Chatacter } from './../model/Character';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public findCharacters(url: string): Observable<Array<Chatacter>> {
    return this.http.get<any>(url).pipe(
      map(
        value => value.results
      )
    );
  }

  public findEpisode(url: string): Observable<Array<any>> {
    return this.http.get<any>(url);
  }

  public findCharacter(url: string): Observable<Chatacter> {
    return this.http.get<Chatacter>(url);
  }
}
