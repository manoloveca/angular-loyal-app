import { Component, OnInit } from '@angular/core';

export interface Articulo{
  id:number,
  titulo:string,

}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  edad:number=12;
  nombre: string = 'Manuel Vega';
  lista: string[] = [];
  articulo: Articulo={
    id:1,
    titulo:'microfono'
  }

  constructor() {
    //cargo la lista
    this.lista.push('primero');
    this.lista.push('segundo');

  }

  ngOnInit(): void {
  }

  getArticulo(): Articulo{
    return this.articulo;
  }

  sumar(a:number,b:number){
    return a + b;
  }

}
