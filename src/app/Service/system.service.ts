import { Injectable } from '@angular/core';
import { System } from '../Models/System';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  sistema = new System();

  getVersione() : string
  {
    return this.sistema.versione;
  }

  getCredito() : number
  {
    return this.sistema.credito;
  }
  
}
