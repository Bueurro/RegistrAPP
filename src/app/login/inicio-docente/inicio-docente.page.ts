import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inicio-docente',
  templateUrl: './inicio-docente.page.html',
  styleUrls: ['./inicio-docente.page.scss'],
})
export class InicioDocentePage implements OnInit {

  nombre: string;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.paramMap.get("name")
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
  hoy : number = Date.now();
  
}
