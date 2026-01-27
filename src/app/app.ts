import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Game');
  dzialanieTyp = 0;
  liczba1s = "";
  liczba2s = "";
  liczba1 = 0;
  liczba2 = 0;
  klik = 0;
  wynikDzial = 0;
  wynikNaStronie = document.getElementById("wynik")?.innerText;
  constructor(){
    this.wynikNaStronie = "0";
  }
  numer(n:number){
    if(this.klik == 0){
      if(this.liczba1s.length < 8){
          this.liczba1s += String(n);
          this.wynikNaStronie = String(this.liczba1s);
        }else{
          this.wynikNaStronie = "Za dużo"
        }
         
    }
    if(this.klik == 1){
      if(this.liczba2s.length < 8){
          this.liczba2s += String(n);
        this.wynikNaStronie = String(this.liczba2s);
        }else{
          this.wynikNaStronie = "Za dużo"
        }
        
    }
    console.log(this.liczba2s)
  }
  dzialanie(n:number){
    if(n == 1){
      this.klik = 1;
      this.dzialanieTyp = 1;
      this.liczba2s = "";
    }
    if(n == 2){
      this.klik = 1;
      this.dzialanieTyp = 2;
      console.log(this.dzialanieTyp);
      this.liczba2s = "";
    }
    if(n == 3){
      this.klik = 1;
      this.dzialanieTyp = 3;
      this.liczba2s = "";
    }
    if(n == 4){
      this.klik = 1;
      this.dzialanieTyp = 4;
      this.liczba2s = "";
    }
  }
  wynik(){
    switch(this.dzialanieTyp){
      case 1:{
        this.wynikDzial = parseInt(this.liczba1s, 10) + parseInt(this.liczba2s, 10);
        this.liczba1s = String(this.wynikDzial);
        if(this.wynikDzial < 99999999){
          this.wynikNaStronie = String(this.wynikDzial);  
        }else{
          this.wynikNaStronie = "Za dużo"
        }
        
        break;
      } 
      case 2:{
        this.wynikDzial =parseInt(this.liczba1s, 10) - parseInt(this.liczba2s, 10);
        this.liczba1s = String(this.wynikDzial);
        this.wynikNaStronie = String(this.wynikDzial); 
        break;      
      }
      case 3:{
        this.wynikDzial =parseInt(this.liczba1s, 10) * parseInt(this.liczba2s, 10);
        this.liczba1s = String(this.wynikDzial);
        this.wynikNaStronie = String(this.wynikDzial); 
        break;      
      }
      case 4:{
        this.wynikDzial = parseInt(this.liczba1s, 10) / parseInt(this.liczba2s, 10);
        this.liczba1s = String(this.wynikDzial);
        this.wynikNaStronie = String(this.wynikDzial); 
        break;      
      }
      
    }
  }
  nieMa(){
    alert("Tej funkcji nie ma")
  }
  czyszczenie(){
    this.liczba1s = "";
    this.liczba2s = "";
    this.wynikNaStronie = "";
    this. wynikDzial = 0;
    this.klik = 0;
  }
  }
