import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pageTitle    : string = 'Filmes, séries e muito mais. Sem limites.';
  public pageSubtitle : string = 'Assista onde quiser. Cancele quando quiser.';
  public labelInput   : string = 'Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.';

  mostrar1 : boolean = false;   
  mostrar2 : boolean = false;
  mostrar3 : boolean = false;   
  mostrar4 : boolean = false;   
  mostrar5 : boolean = false;   
  mostrar6 : boolean = false;   

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDiv1(){
    if(this.mostrar1 == false){
      this.mostrar1  = true;

      this.mostrar2 = false;
      if(this.mostrar2 == false){
        document.getElementById('linha-3')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-4')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar3 = false;
      if(this.mostrar3 == false){
        document.getElementById('linha-5')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-6')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar4 = false;
      if(this.mostrar4 == false){
        document.getElementById('linha-7')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-8')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar5 = false;
      if(this.mostrar5 == false){
        document.getElementById('linha-9')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-10')!.style.transform = 'rotate(0deg)';
      }
      
      this.mostrar6 = false;
      if(this.mostrar6 == false){
        document.getElementById('linha-11')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-12')!.style.transform = 'rotate(0deg)';
      }

      document.getElementById('linha-1')!.style.transform = 'rotate(45deg)';
      document.getElementById('linha-2')!.style.transform = 'rotate(-45deg)';
    }else{
      this.mostrar1 = false;
      document.getElementById('linha-1')!.style.transform = 'rotate(90deg)';
      document.getElementById('linha-2')!.style.transform = 'rotate(0deg)';
    }
  }

  mostrarDiv2(){
    if(this.mostrar2 == false){
      this.mostrar2 = true;

      this.mostrar1 = false;
      if(this.mostrar1 == false){
        document.getElementById('linha-1')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-2')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar3 = false;
      if(this.mostrar3 == false){
        document.getElementById('linha-5')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-6')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar4 = false;
      if(this.mostrar4 == false){
        document.getElementById('linha-7')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-8')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar5 = false;
      if(this.mostrar5 == false){
        document.getElementById('linha-9')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-10')!.style.transform = 'rotate(0deg)';
      }
      
      this.mostrar6 = false;
      if(this.mostrar6 == false){
        document.getElementById('linha-11')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-12')!.style.transform = 'rotate(0deg)';
      }

      document.getElementById('linha-3')!.style.transform = 'rotate(45deg)';
      document.getElementById('linha-4')!.style.transform = 'rotate(-45deg)';
    }else{
      this.mostrar2 = false;
      document.getElementById('linha-3')!.style.transform = 'rotate(90deg)';
      document.getElementById('linha-4')!.style.transform = 'rotate(0deg)';
    }
  }

  mostrarDiv3(){
    if(this.mostrar3 == false){
      this.mostrar3 = true;

      this.mostrar1 = false;
      if(this.mostrar1 == false){
        document.getElementById('linha-1')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-2')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar2 = false;
      if(this.mostrar2 == false){
        document.getElementById('linha-3')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-4')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar4 = false;
      if(this.mostrar4 == false){
        document.getElementById('linha-7')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-8')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar5 = false;
      if(this.mostrar5 == false){
        document.getElementById('linha-9')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-10')!.style.transform = 'rotate(0deg)';
      }
      
      this.mostrar6 = false;
      if(this.mostrar6 == false){
        document.getElementById('linha-11')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-12')!.style.transform = 'rotate(0deg)';
      }

      document.getElementById('linha-5')!.style.transform = 'rotate(45deg)';
      document.getElementById('linha-6')!.style.transform = 'rotate(-45deg)';
    }else{
      this.mostrar3 = false;
      document.getElementById('linha-5')!.style.transform = 'rotate(90deg)';
      document.getElementById('linha-6')!.style.transform = 'rotate(0deg)';
    }
  }

  mostrarDiv4(){
    if(this.mostrar4 == false){
      this.mostrar4 = true;
      
      this.mostrar1 = false;
      if(this.mostrar1 == false){
        document.getElementById('linha-1')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-2')!.style.transform = 'rotate(0deg)';
      }
      
      this.mostrar2 = false;
      if(this.mostrar2 == false){
        document.getElementById('linha-3')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-4')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar3 = false;
      if(this.mostrar3 == false){
        document.getElementById('linha-5')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-6')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar5 = false;
      if(this.mostrar5 == false){
        document.getElementById('linha-9')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-10')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar6 = false;
      if(this.mostrar6 == false){
        document.getElementById('linha-11')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-12')!.style.transform = 'rotate(0deg)';
      }

      document.getElementById('linha-7')!.style.transform = 'rotate(45deg)';
      document.getElementById('linha-8')!.style.transform = 'rotate(-45deg)';
    }else{
      this.mostrar4 = false;
      document.getElementById('linha-7')!.style.transform = 'rotate(90deg)';
      document.getElementById('linha-8')!.style.transform = 'rotate(0deg)';
    }
  }

  mostrarDiv5(){
    if(this.mostrar5 == false){
      this.mostrar5 = true;

      this.mostrar1 = false;
      if(this.mostrar1 == false){
        document.getElementById('linha-1')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-2')!.style.transform = 'rotate(0deg)';
      }
      this.mostrar2 = false;
      if(this.mostrar2 == false){
        document.getElementById('linha-3')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-4')!.style.transform = 'rotate(0deg)';
      }
      this.mostrar3 = false;
      if(this.mostrar3 == false){
        document.getElementById('linha-5')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-6')!.style.transform = 'rotate(0deg)'; 
      }
      this.mostrar4 = false;
      if(this.mostrar4 == false){
        document.getElementById('linha-7')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-8')!.style.transform = 'rotate(0deg)';
      }
      this.mostrar6 = false;
      if(this.mostrar6 == false){
        document.getElementById('linha-11')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-12')!.style.transform = 'rotate(0deg)';
      }

      document.getElementById('linha-9')!.style.transform = 'rotate(45deg)';
      document.getElementById('linha-10')!.style.transform = 'rotate(-45deg)';
    }else{
      this.mostrar5 = false;
      document.getElementById('linha-9')!.style.transform = 'rotate(90deg)';
      document.getElementById('linha-10')!.style.transform = 'rotate(0deg)';
    }
    
  
  }

  mostrarDiv6(){
    if(this.mostrar6 == false){
      this.mostrar6 = true;

      this.mostrar1 = false;
      if(this.mostrar1 == false){
        document.getElementById('linha-1')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-2')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar2 = false;
      if(this.mostrar2 == false){
        document.getElementById('linha-3')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-4')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar3 = false;
      if(this.mostrar3 == false){
        document.getElementById('linha-5')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-6')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar4 = false;
      if(this.mostrar4 == false){
        document.getElementById('linha-7')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-8')!.style.transform = 'rotate(0deg)';
      }

      this.mostrar5 = false;
      if(this.mostrar5 == false){
        document.getElementById('linha-9')!.style.transform = 'rotate(90deg)';
        document.getElementById('linha-10')!.style.transform = 'rotate(0deg)';
      }

      document.getElementById('linha-11')!.style.transform = 'rotate(45deg)';
      document.getElementById('linha-12')!.style.transform = 'rotate(-45deg)';
    }else{
      this.mostrar6 = false;

      document.getElementById('linha-11')!.style.transform = 'rotate(90deg)';
      document.getElementById('linha-12')!.style.transform = 'rotate(0deg)';
    }
    
  }


}
