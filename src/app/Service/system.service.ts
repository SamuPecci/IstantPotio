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

  scalaCredito(spesa:number) : number
  {
    if(this.sistema.credito >= spesa){
      this.sistema.credito -= spesa;
      this.sistema.incasso += spesa;

      console.log(this.getCredito());
      return 0;
    }else{
      return 2; //credito insuficiente
    }

    return 1; //errore imprevisto
  }
}
