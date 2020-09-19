import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  trendingtperson: any[];

  imagesPrefixs: string = 'https://image.tmdb.org/t/p/w500';

  constructor(_moviesService: MoviesService) {
    _moviesService.getTrendingperson().subscribe((data) => {
      this.trendingtperson = data.results;
    });
  }

  ngOnInit(): void {}
}
