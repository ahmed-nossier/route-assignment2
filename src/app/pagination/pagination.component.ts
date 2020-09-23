import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  currentPage = 0;
  ximages = [
    {
      title: 'cinema 1',
      url:
        'https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 2',
      url:
        'https://images.unsplash.com/photo-1579480537892-40fce7bc35a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema3',
      url:
        'https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 4',
      url:
        'https://images.unsplash.com/photo-1585064788609-b216a8e6613b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 1',
      url:
        'https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 2',
      url:
        'https://images.unsplash.com/photo-1579480537892-40fce7bc35a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema3',
      url:
        'https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 4',
      url:
        'https://images.unsplash.com/photo-1585064788609-b216a8e6613b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 1',
      url:
        'https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 2',
      url:
        'https://images.unsplash.com/photo-1579480537892-40fce7bc35a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 3',
      url:
        'https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 4',
      url:
        'https://images.unsplash.com/photo-1585064788609-b216a8e6613b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 1',
      url:
        'https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 2',
      url:
        'https://images.unsplash.com/photo-1579480537892-40fce7bc35a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 3',
      url:
        'https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 4',
      url:
        'https://images.unsplash.com/photo-1585064788609-b216a8e6613b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema1',
      url:
        'https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 2',
      url:
        'https://images.unsplash.com/photo-1579480537892-40fce7bc35a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 3',
      url:
        'https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 4',
      url:
        'https://images.unsplash.com/photo-1585064788609-b216a8e6613b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 1',
      url:
        'https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 2',
      url:
        'https://images.unsplash.com/photo-1579480537892-40fce7bc35a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 3',
      url:
        'https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 4',
      url:
        'https://images.unsplash.com/photo-1585064788609-b216a8e6613b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'cinema 1',
      url:
        'https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
