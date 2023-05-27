import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Productos';
  listaProductos = [
    { nombre: 'Televisor', precio: 20000000 },
    { nombre: 'Ventilador', precio: 500000 },
    { nombre: 'Computador', precio: 5000000 },
    { nombre: 'Celular', precio: 3500000 },
    { nombre: 'Nevera', precio: 2200000}
  ];
}
