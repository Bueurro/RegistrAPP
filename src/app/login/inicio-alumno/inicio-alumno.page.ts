import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Clase } from 'src/app/interfaces/clase';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {


  constructor(private alerta: AlertController, private fire: FirebaseService) { }

  ngOnInit() {
    this.obtenerClases();
  }

  todolist = []

  obtenerClases() {
    this.fire.getCollection<Clase>('Clase').subscribe(
      (res) => {
        console.log(res)
        this.todolist=(res)
      },
      (err) => {

      }
    )
  }

  async agregar() {
    const alert = await this.alerta.create({
      header: 'Agregar Clase',
      inputs: [
        {
          name: 'txtNombreclase',
          placeholder: 'Nombre clase:'
        },
        {
          name: 'txtSeccion',
          placeholder: 'Sigla Sección:'
        },
        {
          name: 'txtHorario',
          placeholder: 'Horario:'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: data => {

          },
        },
      ],
    });

    await alert.present();

  }

}
