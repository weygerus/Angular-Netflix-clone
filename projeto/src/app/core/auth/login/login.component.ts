import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  backgroundImage   : string = '../../../../assets/img/51338567_577313852694858_3199475933706715136_n.jpg';
  logotipo          : string = '../../../../assets/img/netflix-logo-5.png'
  titulo            : string = 'Entrar'

  mostrar: boolean = false;
  
  constructor() { }

  ngOnInit(): void { }
  
  ngOnViewInit(): void { }

  mostrarDiv(){
    document.getElementById('saibamais')!.style.display ="none";    
    this.mostrar = true;
  }
}
