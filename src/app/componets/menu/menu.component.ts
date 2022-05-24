import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public active: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public openSidenave(): void {
    this.active = this.active !== '' ? ''  :'active';
  }

}
