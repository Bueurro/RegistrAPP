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

  msj : string
  usuario: Usuario
  constructor(private servicio: FirebaseService, private router: Router) { }

  ngOnInit() {
    
  }

  onGoogleLogin() {
    
  }

  async login(email, pass) {
    try{
      const user = this.servicio.login(email.value,pass.value)
      if (user) {
        console.log('User->',user)
        this.router.navigate(['/inicio-alumno'])
      }
    } catch (error){
      console.log('Error->',error)
    }

  }
  

}
