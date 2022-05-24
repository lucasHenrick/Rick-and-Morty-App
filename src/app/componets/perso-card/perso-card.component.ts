import { Chatacter } from './../../model/Character';
import { ServiceService } from './../../services/service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perso-card',
  templateUrl: './perso-card.component.html',
  styleUrls: ['./perso-card.component.css']
})
export class PersoCardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  @Input()
  public chatacters: Array<Chatacter> = [];

  ngOnInit(): void {

  }

  public routerInfo(id: any): void {
    this.router.navigate([`character/${id}`])
  }

}
