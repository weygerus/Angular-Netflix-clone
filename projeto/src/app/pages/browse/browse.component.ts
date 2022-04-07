import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  slides = [
    {
      img: '../../../assets/img/banner.png'
    },
    {
      img: '../../../assets/img/banner.png'
    },
    {
      img: '../../../assets/img/banner.png'
    },
    {
      img: '../../../assets/img/banner.png'
    },
    {
      img: '../../../assets/img/banner.png'
    },
    {
      img: '../../../assets/img/banner.png'
    },
    {
      img: '../../../assets/img/banner.png'
    },
    {
      img: '../../../assets/img/banner.png'
    },
  ];
  slideConfig = {slidesToShow: 7, slidesToScroll: 6, };

  constructor() { }

  ngOnInit(): void { }

slickInit(e: any){
  console.log('slick initialized');
}

}
