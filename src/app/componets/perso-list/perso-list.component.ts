import { ServiceService } from './../../services/service.service';
import { Chatacter } from './../../model/Character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perso-list',
  templateUrl: './perso-list.component.html',
  styleUrls: ['./perso-list.component.css']
})
export class PersoListComponent implements OnInit {

  constructor(private service: ServiceService) { }

  public chatacters: Array<Chatacter> = [];

  public page: number = 1;

  ngOnInit(): void {
    const urlCharacters: string = 'https://rickandmortyapi.com/api/character';
    this.service.findCharacters(urlCharacters).subscribe(value => {
      this.chatacters = value
    }
    )
  }

  public more(): void {
    this.page = this.page + 1;
    const urlCharacters: string = `https://rickandmortyapi.com/api/character?page=${this.page}`;
    this.service.findCharacters(urlCharacters).subscribe(value => {
      this.chatacters =this.chatacters.concat(value);
      console.log(this.chatacters)
    })
  }

}
