import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images = [62, 83, 466, 965, 982, 1043, 738].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );
  trendingMovie: any[];
  trendingtv: any[];
  trendingtperson: any[];
  imagesPrefixs: string = 'https://image.tmdb.org/t/p/w500';
  show2: boolean = false;
  model: boolean = true;
  try: any;
  constructor(_moviesService: MoviesService) {
    _moviesService.getTrendingMovie().subscribe((data) => {
      this.trendingMovie = data.results;
    });

    _moviesService.getTrendingperson().subscribe((data) => {
      this.trendingtperson = data.results;
    });

    _moviesService.getTrendingtv().subscribe((data) => {
      this.trendingtv = data.results;
    });
  }
  modelX() {
    this.model = false;
  }
  getStringFromChild(data) {
    this.model = !this.model;
  }

  ngOnInit(): void {}
}
