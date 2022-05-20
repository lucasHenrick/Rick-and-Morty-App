import { Chatacter } from './../model/Character';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

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

  public findEpisodeByCharacter(url: string): Observable<any> {
   return this.http.get<any>(url).pipe(
      switchMap(value => new Observable(observer => {
        forkJoin(value.episode.map(
          (episode: string) => this.http.get(episode)
            .subscribe(ep => {
              value.episode = ep
              observer.next(value);
            })
          )
          )
      }))
      );
  }

  public findCharacter(url: string): Observable<Chatacter> {
    return this.http.get<Chatacter>(url);
  }
}
