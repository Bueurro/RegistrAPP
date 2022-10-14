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
    const user = this.servicio.registrar(email.value,pass.value)
    if (user) {
      this.presentAlert();
    } else {

    }

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Reestablecimiento',
      subHeader: 'eh farso pq es visua',
      message: 'Se ha reestablecido su contraseña',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
