import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Botoes {
  cor    : string;
  class  : string;
  texto  : string;
  label  : string;
  router : string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public botoes: Botoes[] = [
  {
    cor    : "blue",
    class  : "btn-perfil",
    texto  : "perfil teste",
    label  : "usuario 1",
    router : "/home"
  }, 
  {
    cor    : "blue",
    class  : "btn-perfil",
    texto  : "perfil teste",
    label  : "usuario 1",
    router : "/home"
  }, 
  {
    cor    : "blue",
    class  : "btn-perfil",
    texto  : "perfil teste",
    label  : "usuario 1",
    router : "/home"
  }, 
  {
    cor    : "blue",
    class  : "btn-perfil",
    texto  : "perfil teste",
    label  : "usuario 1",
    router : "/home"
  }, 
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public manageProfiles(){
    this.router.navigate(['/ManageProfiles'])
  }

}
