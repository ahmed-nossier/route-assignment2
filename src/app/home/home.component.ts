import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  model: boolean = true;
  constructor() {}
  modelX() {
    this.model = !this.model;
  }
  ngOnInit(): void {}
}
