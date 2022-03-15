import { Component, OnInit } from '@angular/core';
import { Botoes } from '../perfil.component';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
