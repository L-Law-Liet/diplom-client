import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, excepturi?1',
      image: 'https://via.placeholder.com/640x480.png/777?text=News1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse, numquam obcaecati officiis porro quis sunt tenetur. Ab amet asperiores corporis dignissimos ipsa ipsum laborum placeat quas similique, sint voluptates!',
      created_at: '12.12.2022'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, excepturi?2',
      image: 'https://via.placeholder.com/640x480.png/777?text=News2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse, numquam obcaecati officiis porro quis sunt tenetur. Ab amet asperiores corporis dignissimos ipsa ipsum laborum placeat quas similique, sint voluptates!',
      created_at: '12.12.2022'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, excepturi?3',
      image: 'https://via.placeholder.com/640x480.png/777?text=News3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse, numquam obcaecati officiis porro quis sunt tenetur. Ab amet asperiores corporis dignissimos ipsa ipsum laborum placeat quas similique, sint voluptates!',
      created_at: '12.12.2022'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, excepturi?4',
      image: 'https://via.placeholder.com/640x480.png/777?text=News4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse, numquam obcaecati officiis porro quis sunt tenetur. Ab amet asperiores corporis dignissimos ipsa ipsum laborum placeat quas similique, sint voluptates!',
      created_at: '12.12.2022'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
