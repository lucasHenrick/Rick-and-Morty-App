import { ServiceService } from './../../services/service.service';
import { Chatacter } from './../../model/Character';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perso-info',
  templateUrl: './perso-info.component.html',
  styleUrls: ['./perso-info.component.css']
})
export class PersoInfoComponent implements OnInit {

  constructor(
    private service: ServiceService,
    private router: ActivatedRoute) { }

  // @Input()
  public chatacter: Chatacter = {
    "episode": [ ],

  };
  public episodio: Array<any> = [];

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    this.service.findCharacter(url).subscribe(
      (value) => {
        this.chatacter = value;
        if(this.chatacter.episode && this.chatacter.episode?.length < 4){
          this.chatacter.episode.forEach(element =>{
            this.service.findEpisode(element).subscribe( value => this.episodio.push(value) )
          }
          );
        }
        else {
          for (let index = 0; index < 4; index++) {
            this.service.findEpisode(this.chatacter.episode[index]).subscribe( value => this.episodio.push(value) )
          }
        }
      }
    )
  }

}
