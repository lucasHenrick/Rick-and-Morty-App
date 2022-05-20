import { Episodio } from './../../model/Episodio';
import { EpisodioService } from './../../services/episodio.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodio-card',
  templateUrl: './episodio-card.component.html',
  styleUrls: ['./episodio-card.component.css']
})
export class EpisodioCardComponent implements OnInit {

  @Input()
  public  episodio: Array<Episodio> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
