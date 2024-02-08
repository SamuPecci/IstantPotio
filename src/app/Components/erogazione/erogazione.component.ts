import { Component } from '@angular/core';
import { ProdottiService } from '../../Service/prodotti.service';
import { Prodotto } from '../../Models/Prodotto';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { SystemService } from '../../Service/system.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-erogazione',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './erogazione.component.html',
  styleUrl: './erogazione.component.css'
})
export class ErogazioneComponent {

  prodottoScelto : Prodotto | undefined;
  msg : string;
  credito : number;

  constructor(private prodottoService:ProdottiService, private ruoter:Router, private sys:SystemService)
  {
    this.prodottoScelto = prodottoService.getProdottoScelto()
    this.credito = sys.getCredito();
    this.msg = "Erogazione in corso...";

    setTimeout(() => {this.msg = "Ritirare il prodotto";}, 5000);
    setTimeout(() => {this.ruoter.navigate(['/']);}, 10000);
  }
}
