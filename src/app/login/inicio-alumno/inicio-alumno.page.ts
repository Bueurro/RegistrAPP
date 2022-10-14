import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }

  todolist = [
    {
      itemName : 'clase PGY009D',
      itemDeuDate : '6-8-2022',
      itemPriority : 'ahora',
      ItemCategory : 'CLASE',

    },
    {
      itemName : 'clase  mdy005D',
      itemDeuDate : '7-8-2022',
      itemPriority : 'mediodia',
      ItemCategory : 'CLASE',

    },
    {
      itemName : 'clase PGY007D',
      itemDeuDate : '9-8-2022',
      itemPriority : 'tarde',
      ItemCategory : 'CLASE',

    },
  ]
}
