import { Chatacter } from './../../model/Character';
import { Episodio } from './../../model/Episodio';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodioService } from 'src/app/services/episodio.service';

@Component({
  selector: 'app-episodio-info',
  templateUrl: './episodio-info.component.html',
  styleUrls: ['./episodio-info.component.css']
})
export class EpisodioInfoComponent implements OnInit {

  constructor(
    private service: EpisodioService,
    private router: ActivatedRoute
  ) { }

  public episodio : Episodio = {
  }

  public characters: Array<Chatacter> = [];

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const url = `https://rickandmortyapi.com/api/episode/${id}`;
    this.service.findEpisodiosById(url).subscribe(value => {
      this.episodio = value;
      this.characters.push(value.characters);
    } )
  }

}
