import { Component } from '@angular/core';
import { ProdottoFreddo } from '../../Models/ProdottoFreddo';
import { ProdottiService } from '../../Service/prodotti.service';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from '../title-bar/title-bar.component';

@Component({
  selector: 'app-prodotti-freddi',
  standalone: true,
  imports: [CommonModule, TitleBarComponent],
  templateUrl: './prodotti-freddi.component.html',
  styleUrl: './prodotti-freddi.component.css'
})
export class ProdottiFreddiComponent {
  prodotti : ProdottoFreddo[];
  numeri : string[] = ["1","2","3","4","5","6","7","8","9","CANC","0","INVIO"];
  value : string = "";
  statusProdottoErogato : number|null = null;

  constructor(private prod : ProdottiService)
  {
    this.prodotti = prod.getProdottiFreddi();
  }

  scrivi(n:string) : void
  {
    if (n == "CANC")
      this.value = this.value.slice(0, -1);

    else if (n == "INVIO"){
      this.statusProdottoErogato = this.prod.erogaProdotto(this.value);
      console.log(this.statusProdottoErogato);

    }else if (this.value.length < 3)
      this.value += n;
  }
}
