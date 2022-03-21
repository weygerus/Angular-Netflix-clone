import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
      $(window).on("scroll", function() {
          if ($(window).scrollTop()! > 100) {
              $(".main-menu").addClass("second-menu");
              $(".main-lista").addClass("second-lista");
          } else {
              $(".main-menu").removeClass("second-menu");
              $(".main-lista").removeClass("second-lista")
          }
      })
  })
}

}
