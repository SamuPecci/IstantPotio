import { Component } from '@angular/core';
import { SystemService } from '../../Service/system.service';
import { CommonModule } from '@angular/common';
import { ProdottiService } from '../../Service/prodotti.service';
import { BevandaCalda } from '../../Models/BevandaCalda';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-conferma-aquisto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './conferma-aquisto.component.html',
  styleUrl: './conferma-aquisto.component.css'
})
export class ConfermaAquistoComponent {

  credito : number;
  prodottoSelezionato : BevandaCalda | undefined;
  zucchero : number = 0;

  constructor(private sys:SystemService, private prodottoService:ProdottiService, private router:Router)
  {
    this.credito = sys.getCredito()

    this.prodottoSelezionato = prodottoService.getBevandaCaldaScelta();
  }

  aggiornaZucchero()
  {
    this.zucchero = parseInt((<HTMLInputElement>document.getElementById("customRange3")).value);
  }

  canferma()
  {
    this.prodottoService.confermaProdotto(this.zucchero);
    this.router.navigate(["erogazione"]);
  }
}
