import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Clase } from 'src/app/interfaces/clase';
import { FirebaseService } from 'src/app/services/firebase.service';
import { getAuth } from "firebase/auth";
import { Tempuser } from 'src/app/interfaces/tempuser';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {


  constructor(private alerta: AlertController, private fire: FirebaseService) { }

  ngOnInit() {
    this.obtenerClases();
    this.validacion();
  }

  todolist = []

  usuariolog : any;


  validacion() {
    this.fire.obtenerUsuario().then(
      (resp)=>{
        this.usuariolog= resp.email;
      },
      (err) => {
        console.log(err);
      }
    )
  }


  obtenerClases() {
    this.fire.getCollection<Clase>('Clase').subscribe(
      (res) => {
        console.log(res)
        this.todolist=(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }



}
