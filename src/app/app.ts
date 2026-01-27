import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

 const wysokosc = 9;
 const szerokosc = 9;
 const iloscMin = 8;

 interface Kord{
  wiersz:number ;
  kolumna:number ;
 }

 const a = [[1,0],[0,1],[-1,0],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1]]
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gra');
  tabela: number[][] = [];
  mina1 : Kord[] = [];
  constructor() {
    for(let i = 0; i < 9; i++){
      const row = [];
      for(let j = 0; j < 9; j++){
        row.push(0);
      }
      this.tabela.push(row);
    }
  
    let mina = 0;
    while(mina < iloscMin){
      const wiersz = Math.floor(9 * Math.random())
      const kolumna = Math.floor(9 * Math.random())
    
      if(this.tabela[wiersz][kolumna] === 0){
          this.tabela[wiersz][kolumna] = -1
          this.mina1.push({wiersz, kolumna})
          mina ++;
      }
    }
    
    for(const { wiersz, kolumna} of this.mina1){
      const s = [];
      
      for(let i = 0; i <a.length; i++){
        const [x,y]= a[i]
        const newX = wiersz + x;
        const newY = kolumna + y;
        if(newX>= 0 && newX < wysokosc && newY>= 0 && newY < szerokosc && this.tabela[newX][newY]>=0){
          this.tabela[newX][newY]++;
        }

      }
    }
  }
}
