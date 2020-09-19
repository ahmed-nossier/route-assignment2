import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  users: object[];
  constructor(_moviesService: MoviesService) {
    this.users = _moviesService.users;
  }

  ngOnInit(): void {}
}
