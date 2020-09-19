import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  users: object[] = [
    {
      title: 'snow mountain',
      imageUrl: 'assetsmountainjpeg',
      username: 'MAd max',
      content:
        'max like to go to the he love to do the nature if you know what i mean',
    },
    {
      title: 'danger biking ',
      imageUrl: 'assetsbikingjpeg',
      username: 'sad soad',
      content: "soad has the her city but that didn't stop her from biking",
    },
    {
      title: 'neat tree ',
      imageUrl: 'assetstreejpeg',
      username: 'bold abbas',
      content: 'abbas is very bold thats why he love sitting under trees',
    },
  ];

  constructor(public _HttpClient: HttpClient) {}
  getTrendingtv(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/trending/tv/day?api_key=a7f4db05bd042f75e79b94b7efb60595'
    );
  }
  getTrendingperson(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/trending/person/day?api_key=a7f4db05bd042f75e79b94b7efb60595'
    );
  }

  getTrendingMovie(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=a7f4db05bd042f75e79b94b7efb60595'
    );
  }
}
