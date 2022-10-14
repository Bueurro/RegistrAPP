import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mensaje : string
  usuario: Usuario
  constructor(private servicio: FirebaseService, private router: Router) { }

  ngOnInit() {
    
  }

  async login(email, pass) {
    const user = this.servicio.login(email.value,pass.value)
    if (user) {
      this.router.navigate(['/inicio-alumno'])
    } else {

    }
  }

}
