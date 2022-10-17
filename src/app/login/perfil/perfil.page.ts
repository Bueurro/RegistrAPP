import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router, private alerta: AlertController, private fire: FirebaseService) { }

  nombre: string;

  ngOnInit() {
    
  }

  async mensajeLogout() {
    const alert = await this.alerta.create({
      header: 'Cerrar Sesión',
      message: 'Esta Seguro de cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sí',
          handler: () => {
            this.router.navigate(['/home']);
            this.fire.logout();
          },
        },
      ],
    });

    await alert.present();

  }

}
