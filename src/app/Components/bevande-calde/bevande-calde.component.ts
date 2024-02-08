import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BevandaCalda } from '../../Models/BevandaCalda';
import { ProdottiService } from '../../Service/prodotti.service';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bevande-calde',
  standalone: true,
  imports: [CommonModule, TitleBarComponent, RouterModule],
  templateUrl: './bevande-calde.component.html',
  styleUrl: './bevande-calde.component.css'
})
export class BevandeCaldeComponent {
  prodotti : BevandaCalda[];

  constructor(prod : ProdottiService)
  {
    this.prodotti = prod.getBevandeCalde();
  }
}
