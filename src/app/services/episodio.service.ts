import { map, switchMap } from 'rxjs/operators';
import { Episodio } from './../model/Episodio';
import { forkJoin, Observable } from 'rxjs';
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

  public findEpisodiosById(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
    switchMap(value => new Observable(observer => {
      forkJoin(value.characters.map(
        (characters: string) => this.http.get(characters)
          .subscribe(perso => {
            value.characters = perso
            observer.next(value);
          })
        )
        )
    }))
    );
  }
}
