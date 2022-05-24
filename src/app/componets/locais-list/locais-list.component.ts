import { LocationService } from './../../services/location.service';
import { Component, OnInit } from '@angular/core';
import { Location } from "../../model/Location";

@Component({
  selector: 'app-locais-list',
  templateUrl: './locais-list.component.html',
  styleUrls: ['./locais-list.component.css']
})
export class LocaisListComponent implements OnInit {


  constructor(
    private service: LocationService
    ) { }

    public locais : Array<Location> = [];
    public page: number = 1;

  ngOnInit(): void {
    const url = "https://rickandmortyapi.com/api/location";
    this.service.findLocations(url).subscribe(value => this.locais = value);

  }

  public more(): void {
    this.page = this.page + 1;
    const urllocation: string = `https://rickandmortyapi.com/api/location?page=${this.page}`;
    this.service.findLocations(urllocation).subscribe(value => {
      this.locais = this.locais.concat(value);
    })
  }

}
