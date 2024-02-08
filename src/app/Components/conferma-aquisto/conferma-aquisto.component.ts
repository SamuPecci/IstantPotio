import { Component } from '@angular/core';
import { SystemService } from '../../Service/system.service';
import { CommonModule } from '@angular/common';
import { ProdottiService } from '../../Service/prodotti.service';
import { BevandaCalda } from '../../Models/BevandaCalda';

@Component({
  selector: 'app-conferma-aquisto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conferma-aquisto.component.html',
  styleUrl: './conferma-aquisto.component.css'
})
export class ConfermaAquistoComponent {

  credito : number;
  prodottoSelezionato : BevandaCalda | undefined;

  constructor(private sys:SystemService, private prodottoService : ProdottiService){
    this.credito = sys.getCredito()

    this.prodottoSelezionato = prodottoService.getBevandaCaldaScelta();
  }
}
