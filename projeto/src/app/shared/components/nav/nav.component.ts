import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

export interface Imenu {
  item: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menuItens: Imenu[] = [
    {item: "Inicio"},
    {item: "Series"},
    {item: "Filmes"},
    {item: "bombando"},
    {item: "minha lista"}
  ]
  
  constructor() { }

  ngOnInit(): void {
      $(function() {
        $(window).on("scroll", function() {
          if ($(window).scrollTop()! > 50) {
              document.getElementById('menu')!.style.backgroundColor = '#101010'
          }
          else {
              document.getElementById('menu')!.style.backgroundColor = 'transparent'
          }
        })
    });
  }
}


/*
Solução anterior:

if ($(window).scrollTop()! > 50) {
  $(".main-menu").addClass("second-menu");
  $(".main-list").addClass("second-list");
} else {
  $(".main-menu").removeClass("second-menu");
  $(".main-list").removeClass("second-list");
}
*/