import { SwiperComponent } from 'swiper/angular';
import { Component, OnInit, ViewChild } from '@angular/core';


export interface IBanners {
  img: string;
  alt: string;
}


@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css']
})
export class CarouselsComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  banners: IBanners[] = [
    {
      img: '../../../../assets/img/banners/1.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/2.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/3.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/4.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/5.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/6.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/7.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/8.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/9.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/10.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/11.jpg',
      alt: 'movie'
    },
    {
      img: '../../../../assets/img/banners/12.jpg',
      alt: 'movie'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
