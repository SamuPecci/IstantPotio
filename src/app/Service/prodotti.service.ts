import { Injectable } from '@angular/core';
import { ProdottoFreddo } from '../Models/ProdottoFreddo';
import { BevandaCalda } from '../Models/BevandaCalda';
import { Prodotto } from '../Models/Prodotto';
import { ParseSourceFile } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private bevandeCalde : BevandaCalda[] = [
    new BevandaCalda("Espresso", "../../../assets/BevandeCalde/espresso.jpg", 0.80, 5, 0),
    new BevandaCalda("Latte", "../../../assets/BevandeCalde/latte.jpg", 1, 6, 1),
    new BevandaCalda("Té limone", "../../../assets/BevandeCalde/te.jpg", 0.70, 3, 0),
    new BevandaCalda("Caffè lungo", "../../../assets/BevandeCalde/lungo.jpg", 0.70, 3, 0),
    new BevandaCalda("Caffè corto", "../../../assets/BevandeCalde/corto.jpeg", 0.70, 3, 0),
    new BevandaCalda("Caffè macchiato", "../../../assets/BevandeCalde/macchiato.jpg", 0.70, 3, 0),
    new BevandaCalda("Ginseng", "../../../assets/BevandeCalde/ginseng.webp", 0.70, 3, 0),
    new BevandaCalda("Cappuccino", "../../../assets/BevandeCalde/cappuccio.webp", 0.70, 3, 0),
    new BevandaCalda("Latte caldo", "../../../assets/BevandeCalde/latte.jpg", 0.70, 3, 0),
    new BevandaCalda("Latte macchiato", "../../../assets/BevandeCalde/lattemacchiato.webp", 0.70, 3, 0),
    new BevandaCalda("Cioccolata calda", "../../../assets/BevandeCalde/cioccolatacalda.jpg", 0.70, 3, 0),
    new BevandaCalda("Orzo", "../../../assets/BevandeCalde/orzo.jpg", 0.70, 3, 0)
  ]

  private prodottiFreddi : ProdottoFreddo[] = [
    new ProdottoFreddo("Coca Cola", "../../../assets/ProdottiFreddi/coca.jpg", 0.80, 5, 0, "001"),
    new ProdottoFreddo("Kinder Bueno", "../../../assets/ProdottiFreddi/bueno.jpg", 1, 6, 1, "002"),
    new ProdottoFreddo("Brioches", "../../../assets/ProdottiFreddi/brioches.jpg", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Powerade", "../../../assets/ProdottiFreddi/energy.jpg", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Estathe pesca", "../../../assets/ProdottiFreddi/estapesca.jpeg", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Estathe limone", "../../../assets/ProdottiFreddi/estalimone.jpg", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Fanta", "../../../assets/ProdottiFreddi/fanta.webp", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Kinder Fiesta", "../../../assets/ProdottiFreddi/fiesta.webp", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Fonzies", "../../../assets/ProdottiFreddi/fonzies.jpg", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Acqua naturale", "../../../assets/ProdottiFreddi/natu.jpg", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Acqua frizzante", "../../../assets/ProdottiFreddi/gas.jpg", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Kit Kat", "../../../assets/ProdottiFreddi/kitkat.webp", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Red Bull", "../../../assets/ProdottiFreddi/redbul.jpg", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Schiacciatine", "../../../assets/ProdottiFreddi/schiacciatine.jpeg", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Tuc", "../../../assets/ProdottiFreddi/tuc.webp", 0.70, 3, 0, "003")
  ]

  
  getBevandeCalde() : BevandaCalda[]
  {
    return this.bevandeCalde;
  }

  getProdottiFreddi() : ProdottoFreddo[]
  {
    return this.prodottiFreddi;
  }

  erogaProdotto(prodotto:string) : number
  {
    //Da implementare (ovviamente se no sei un coglione!)
    return 0;
  }
}
