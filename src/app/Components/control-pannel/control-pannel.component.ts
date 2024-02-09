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
    const multiplier = Math.pow(10, 2);
    this.credito = Math.round(sys.getCredito() * multiplier) / multiplier;
    this.incasso = Math.round(sys.getIncasso() * multiplier) / multiplier

    this.bevandeCalde = prodotti.getBevandeCalde();
    this.prodottiFreddi = prodotti.getProdottiFreddi();
  }

  creaCsv() : void
  {
    let data:String[][] = [];

    data.push(["Pannello di controllo"])
    data.push(["Credito", this.credito.toString()], ["Incasso", this.incasso.toString()])
    
    data.push([],["Prodotti Caldi","Q.ta Venduta", "Q.ta disponibile"]);
    this.bevandeCalde.forEach(e => {
      data.push([e.nome, e.qtaVenduta.toString(), e.qtaDisponibile.toString()]);
    });

    data.push([],["Prodotti Freddi","Q.ta Venduta", "Q.ta disponibile"]);
    this.prodottiFreddi.forEach(e => {
      data.push([e.nome, e.qtaVenduta.toString(), e.qtaDisponibile.toString()]);
    });

    let contenuto = data.map(row => row.join(';')).join('\n');
    let blob = new Blob([contenuto], { type: 'csv'})
    let url = URL.createObjectURL(blob);
    let link = (document.createElement('a'));
    
    link.href = url;
    link.download = "PannelloDiControllo.csv";
    link.click();

    URL.revokeObjectURL(url);
  }
}
