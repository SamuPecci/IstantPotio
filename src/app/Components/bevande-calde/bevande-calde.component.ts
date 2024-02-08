import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BevandaCalda } from '../../Models/BevandaCalda';
import { ProdottiService } from '../../Service/prodotti.service';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bevande-calde',
  standalone: true,
  imports: [CommonModule, TitleBarComponent, RouterModule],
  templateUrl: './bevande-calde.component.html',
  styleUrl: './bevande-calde.component.css'
})
export class BevandeCaldeComponent {
  prodotti : BevandaCalda[];

  constructor(private prod:ProdottiService, private router:Router)
  {
    this.prodotti = prod.getBevandeCalde();
  }

  scegliBevanda(scelto:BevandaCalda)
  {
    this.prod.erogaProdottoCaldo(scelto);
    this.router.navigate(["confermaAcquisto"]);
  }
}
