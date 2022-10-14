import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  nombre: string;

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.paramMap.get("name")
  }

}
