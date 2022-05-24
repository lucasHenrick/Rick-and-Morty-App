import { map, switchMap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from "../model/Location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient
  ) { }

  public findLocations(url: string): Observable<Array<Location>> {
    return this.http.get<any>(url).pipe(
      map(value => value.results)
    )
  }

  public findLocationId(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      switchMap(value => new Observable(observer => {
        forkJoin(value.residents.map(
          (perso: string) => this.http.get(perso)
            .subscribe(character => {
              value.residents = character
              observer.next(value);
            })
          )
          )
      }))
      );
  }

}
