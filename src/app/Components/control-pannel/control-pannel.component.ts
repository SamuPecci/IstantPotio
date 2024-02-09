import { Component } from '@angular/core';
import { SystemService } from '../../Service/system.service';
import { BevandaCalda } from '../../Models/BevandaCalda';
import { ProdottoFreddo } from '../../Models/ProdottoFreddo';
import { ProdottiService } from '../../Service/prodotti.service';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from '../title-bar/title-bar.component';

@Component({
  selector: 'app-control-pannel',
  standalone: true,
  imports: [CommonModule, TitleBarComponent],
  templateUrl: './control-pannel.component.html',
  styleUrl: './control-pannel.component.css'
})
export class ControlPannelComponent {
  credito:number;
  incasso:number;
  bevandeCalde:BevandaCalda[];
  prodottiFreddi:ProdottoFreddo[];
  
  constructor(private sys:SystemService, private prodotti:ProdottiService)
  {
    this.credito = sys.getCredito();
    this.incasso = sys.getIncasso();
    this.bevandeCalde = prodotti.getBevandeCalde();
    this.prodottiFreddi = prodotti.getProdottiFreddi();
  }
}
