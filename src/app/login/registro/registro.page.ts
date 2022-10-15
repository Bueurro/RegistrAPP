import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private servicio: FirebaseService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async registrar(email, pass) {
    try{
      const user = this.servicio.registrar(email.value,pass.value)
      if (user) {
        console.log('User->',user)
        this.presentAlert();
      } 
    }catch (error){
      console.log('Error->',error)
    }
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Creación de cuenta',
      subHeader: '',
      message: 'Se ha creado su cuenta',
      buttons: ['OK'],
    });
    await alert.present();
    this.router.navigate(['/login'])
  }
}
