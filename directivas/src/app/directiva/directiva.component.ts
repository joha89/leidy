import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  isHabilitado = true;
  estudiantes: Estudiante[] = [
      {codigo: 1, nombre: 'Diego', apellido: 'Marín', nota: 3.8, observacion: 'Aprobó'},
      {codigo: 2, nombre: 'Luisa', apellido: 'Rendón' , nota: 2.5, observacion: 'Reprobó'},
      {codigo: 3, nombre: 'luciana', apellido: 'Munera' , nota: 4.5, observacion: 'Aprobó'},
      {codigo: 4, nombre: 'Stiven', apellido: 'Rodriguez' , nota: 2.0, observacion: 'Reprobó'},
      {codigo: 5, nombre: 'Camila', apellido: 'Montoya' , nota: 3.0, observacion: 'Aprobó'},
      {codigo: 6, nombre: 'Andrea', apellido: 'Escobar' , nota: 3.6, observacion: 'Aprobó'},
      {codigo: 7, nombre: 'Juan', apellido: 'Bustamante' , nota: 2.8, observacion: 'Reprobó'},
      {codigo: 8, nombre: 'Carlos', apellido: 'Areiza' , nota: 4.0, observacion: 'Aprobó'},
      {codigo: 9, nombre: 'Santiago', apellido: 'Osorio' , nota: 2.4, observacion: 'Reprobó'},
      {codigo: 10, nombre: 'Jeronimo', apellido: 'Franco' , nota: 3.2, observacion: 'Aprobó'},
  ];

  constructor() {


  }

  ngOnInit(): void {

  }
}
