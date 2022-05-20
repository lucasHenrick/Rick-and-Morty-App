import { Component, OnInit } from '@angular/core';
import { Episodio } from 'src/app/model/Episodio';
import { EpisodioService } from 'src/app/services/episodio.service';

@Component({
  selector: 'app-episodio-list',
  templateUrl: './episodio-list.component.html',
  styleUrls: ['./episodio-list.component.css']
})
export class EpisodioListComponent implements OnInit {

  public  episodio: Array<Episodio> = [];
  public page: number = 1;

  constructor(private service: EpisodioService) { }

  ngOnInit(): void {
    const url = "https://rickandmortyapi.com/api/episode";
    this.service.findEpisodios(url).subscribe(value => this.episodio = value)
  }

  public more(): void {
    this.page = this.page + 1;
    const urlCharacters: string = `https://rickandmortyapi.com/api/episode?page=${this.page}`;
    this.service.findEpisodios(urlCharacters).subscribe(value => {
      this.episodio =this.episodio.concat(value);
    })
  }

}
