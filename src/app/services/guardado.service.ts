import { Injectable } from '@angular/core';
import { Tempuser } from '../interfaces/tempuser';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class GuardadoService {

  constructor(private fire: FirebaseService) { }

  async GuardarFire(nombre: string, email: string, pass: string, docente: number) {
    const tuser: Tempuser = {
      uid : this.fire.getId(),
      email : email,
      displayName : nombre,
      docente: docente,
      pass: pass,
    };
  
    this.fire.createDoc(tuser,'users',tuser.uid);
    this.fire.mensaje('Cuenta Registrada en la base de datos');
    console.log(tuser)
      
  }

}
