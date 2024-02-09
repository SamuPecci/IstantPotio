import { Injectable } from '@angular/core';
import { System } from '../Models/System';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  sistema = new System(10, 0, "v1.0");

  getVersione() : string
  {
    return this.sistema.versione;
  }

  getCredito() : number
  {
    return this.sistema.credito;
  }

  getIncasso()
  {
    return this.sistema.incasso;
  }

  scalaCredito(spesa:number) : number
  {
    if(this.sistema.credito >= spesa){
      this.sistema.credito -= spesa;
      this.sistema.incasso += spesa;

      console.log(this.getCredito());
      return 0;
    } else{
      return 2; //credito insuficiente
    }

    return 1; //errore imprevisto
  }
}
