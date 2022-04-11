import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

export interface IBanners {
  id: number;
  path: string;
  alt: string;
}


@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css']
})
export class CarouselsComponent implements OnInit {

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  config = { 
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      arrows: true,
      speed: 1500,
    };

  images: IBanners[] = [
    {
      id: 1,
      path: '../../../../assets/img/banners/1.jpg',
      alt: 'movie'
    },
    {
      id: 2,
      path: '../../../../assets/img/banners/2.jpg',
      alt: 'movie'
    },
    {
      id: 3,
      path: '../../../../assets/img/banners/3.jpg',
      alt: 'movie'
    },
    {
      id: 4,
      path: '../../../../assets/img/banners/4.jpg',
      alt: 'movie'
    },
    {
      id: 5,
      path: '../../../../assets/img/banners/5.jpg',
      alt: 'movie'
    },
    {
      id: 6,
      path: '../../../../assets/img/banners/6.jpg',
      alt: 'movie'
    },
    {
      id: 7,
      path: '../../../../assets/img/banners/7.jpg',
      alt: 'movie'
    },
    {
      id: 8,
      path: '../../../../assets/img/banners/8.jpg',
      alt: 'movie'
    },
    {
      id: 9,
      path: '../../../../assets/img/banners/9.jpg',
      alt: 'movie'
    },
    {
      id: 10,
      path: '../../../../assets/img/banners/10.jpg',
      alt: 'movie'
    },
    {
      id: 11,
      path: '../../../../assets/img/banners/11.jpg',
      alt: 'movie'
    },
    {
      id: 12,
      path: '../../../../assets/img/banners/12.jpg',
      alt: 'movie'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.slickModal.slickNext();
  }
  
  prev() {
    this.slickModal.slickPrev();
  }
}
