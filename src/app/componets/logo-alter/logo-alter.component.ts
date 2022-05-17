import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-alter',
  templateUrl: './logo-alter.component.html',
  styleUrls: ['./logo-alter.component.css']
})
export class LogoAlterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public url: string = '';

}
