import { Chatacter } from './../../model/Character';
import { ServiceService } from './../../services/service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perso-card',
  templateUrl: './perso-card.component.html',
  styleUrls: ['./perso-card.component.css']
})
export class PersoCardComponent implements OnInit {

  constructor() { }
  @Input()
  public chatacters: Array<Chatacter> = [];

  ngOnInit(): void {

  }

}
