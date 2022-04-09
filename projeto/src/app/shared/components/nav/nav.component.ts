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

  navegar: boolean = false;

  menuItens: Imenu[] = [
    {item: "Início"},
    {item: "Séries"},
    {item: "Filmes"},
    {item: "Bombando"},
    {item: "Minha lista"}
  ]
  
  constructor() { }

  ngOnInit(): void {
    // Função Jquery para alteração de cor da nav no scroll //
    $(function() {
      const menu = document.getElementById('menu');
        $(window).on("scroll", function() {
          if($(window).scrollTop()! > 50) {
            menu!.style.backgroundColor = '#101010'
          }
          else {
            menu!.style.backgroundColor = 'transparent'
          }
        })
    });
  }


  navegarclick(){
    const mobileMenu = document.getElementById('mobile-menu');
    const menuSeta   = document.getElementById('mobile-icon');

    this.navegar = !this.navegar;
    console.log('ok')
    if(this.navegar == true){
      mobileMenu!.style.opacity = '0.9';
      menuSeta!.style.transform = 'rotate(-90deg)';
      $('')
    }else{
      mobileMenu!.style.opacity = '0';
      menuSeta!.style.transform = 'rotate(90deg)';
    }
  }


}


/*
FUNÇÕES DESCONTINUADAS

Função troca de cor do menu:

if ($(window).scrollTop()! > 50) {
  $(".main-menu").addClass("second-menu");
  $(".main-list").addClass("second-list");
} else {
  $(".main-menu").removeClass("second-menu");
  $(".main-list").removeClass("second-list");
}


Função dropdown navegar:

$(function(){
     $(".mobile-listitem").hover(
       function(){
         //hover-in
         $(this).next('mobile-menu').css("opacity", "0")
       },
       function(){
         //hover-out
         $(this).next('mobile-menu').css("opacity", "1")
       });
   })
*/