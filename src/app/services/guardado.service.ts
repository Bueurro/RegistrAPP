import { Injectable } from '@angular/core';
import { Tempuser } from '../interfaces/tempuser';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class GuardadoService {

  constructor(private fire: FirebaseService) { }

  async GuardarFire(email: string, pass: string, docenteu: boolean) {
    var docentetatu = docenteu
    var estadoDocente = 1
    if (docentetatu = true) {
      estadoDocente = 2
    }else if (docentetatu = false){
      estadoDocente = 1
    };
    const tuser: Tempuser = {
      uid : this.fire.getId(),
      email : email,
      displayName : 'null',
      docente: estadoDocente,
      pass: pass,
    };
  
    this.fire.createDoc(tuser,'users',tuser.uid);
    this.fire.mensaje('Cuenta Registrada en la base de datos');
    console.log(tuser)
      
  }

}
