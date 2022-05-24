import { Location } from './../../model/Location';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-locais-card',
  templateUrl: './locais-card.component.html',
  styleUrls: ['./locais-card.component.css']
})
export class LocaisCardComponent implements OnInit {


  @Input()
  public locais : Array<Location> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
