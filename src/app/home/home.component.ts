import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opponent : Number = 0;
  you : Number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
