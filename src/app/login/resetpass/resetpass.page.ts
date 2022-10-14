import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
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
