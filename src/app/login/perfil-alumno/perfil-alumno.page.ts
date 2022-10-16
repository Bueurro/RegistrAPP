import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {

  nombre: string;
  constructor(private router: Router, private alerta: AlertController, private fire: FirebaseService) { }

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
