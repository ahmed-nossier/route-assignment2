import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  trendingtv: any[];
  imagesPrefixs: string = 'https://image.tmdb.org/t/p/w500';

  constructor(_moviesService: MoviesService) {
    _moviesService.getTrendingtv().subscribe((data) => {
      this.trendingtv = data.results;
    });
  }

  ngOnInit(): void {}
}
