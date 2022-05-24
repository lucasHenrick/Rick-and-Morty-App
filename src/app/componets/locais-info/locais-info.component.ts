import { LocationService } from './../../services/location.service';
import { Chatacter } from './../../model/Character';
import { Component, OnInit } from '@angular/core';
import { Location } from '../../model/Location';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-locais-info',
  templateUrl: './locais-info.component.html',
  styleUrls: ['./locais-info.component.css']
})
export class LocaisInfoComponent implements OnInit {

  constructor(
    private service: LocationService,
    private router: ActivatedRoute
  ) { }
  public locations : Location = { };
  public characters: Array<Chatacter> = [];
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const url = `https://rickandmortyapi.com/api/location/${id}`;
    this.service.findLocationId(url).subscribe(
      value => {
        this.locations = value;
        this.characters.push(value.residents)
      }
    )
  }

}
