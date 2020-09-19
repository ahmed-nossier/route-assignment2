import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  trendingMovie: any[];
  imagesPrefixs: string = 'https://image.tmdb.org/t/p/w500';

  constructor(_moviesService: MoviesService) {
    _moviesService.getTrendingMovie().subscribe((data) => {
      this.trendingMovie = data.results;
    });
  }

  ngOnInit(): void {}
}
