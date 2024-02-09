import { Injectable } from '@angular/core';
import { ProdottoFreddo } from '../Models/ProdottoFreddo';
import { BevandaCalda } from '../Models/BevandaCalda';
import { Prodotto } from '../Models/Prodotto';
import { ParseSourceFile } from '@angular/compiler';
import { SystemService } from './system.service';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private bevandeCalde: BevandaCalda[] = [
    new BevandaCalda("Espresso", "../../../assets/BevandeCalde/espresso.png", 0.80, 3, 0, "caffe"),
    new BevandaCalda("Latte", "../../../assets/BevandeCalde/latte.png", 1, 3, 0, "latte"),
    new BevandaCalda("Té limone", "../../../assets/BevandeCalde/te.png", 0.70, 3, 0, "altro"),
    new BevandaCalda("Caffè lungo", "../../../assets/BevandeCalde/lungo.png", 0.80, 3, 0, "caffe"),
    new BevandaCalda("Caffè corto", "../../../assets/BevandeCalde/corto.png", 0.80, 3, 0, "caffe"),
    new BevandaCalda("Caffè macchiato", "../../../assets/BevandeCalde/macchiato.png", 0.90, 3, 0, "caffe"),
    new BevandaCalda("Ginseng", "../../../assets/BevandeCalde/ginseng.png", 1.10, 3, 0, "altro"),
    new BevandaCalda("Cappuccino", "../../../assets/BevandeCalde/cappuccino.png", 1.20, 3, 0, "caffe"),
    new BevandaCalda("Latte macchiato", "../../../assets/BevandeCalde/lattemacchiato.png", 0.80, 3, 0, "latte"),
    new BevandaCalda("Cioccolata calda", "../../../assets/BevandeCalde/cioccolatacalda.png", 0.80, 3, 0, "altro"),
    new BevandaCalda("Orzo", "../../../assets/BevandeCalde/orzo.png", 0.80, 3, 0, "altro")
  ]

  private prodottiFreddi: ProdottoFreddo[] = [
    new ProdottoFreddo("Coca Cola", "../../../assets/ProdottiFreddi/coca.png", 0.80, 3, 0, "001"),
    new ProdottoFreddo("Kinder Bueno", "../../../assets/ProdottiFreddi/bueno.png", 1.00, 3, 0, "002"),
    new ProdottoFreddo("Brioches", "../../../assets/ProdottiFreddi/brioches.png", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Powerade", "../../../assets/ProdottiFreddi/energy.png", 1.80, 3, 0, "004"),
    new ProdottoFreddo("Estathe pesca", "../../../assets/ProdottiFreddi/estapesca.png", 1.20, 3, 0, "005"),
    new ProdottoFreddo("Estathe limone", "../../../assets/ProdottiFreddi/estalimone.png", 1.20, 3, 0, "006"),
    new ProdottoFreddo("Fanta", "../../../assets/ProdottiFreddi/fanta.png", 1.50, 3, 0, "007"),
    new ProdottoFreddo("Kinder Fiesta", "../../../assets/ProdottiFreddi/fiesta.png", 1.00, 3, 0, "008"),
    new ProdottoFreddo("Fonzies", "../../../assets/ProdottiFreddi/fonzies.png", 1.00, 3, 0, "009"),
    new ProdottoFreddo("Acqua naturale", "../../../assets/ProdottiFreddi/natu.png", 0.50, 3, 0, "010"),
    new ProdottoFreddo("Acqua frizzante", "../../../assets/ProdottiFreddi/gas.png", 0.50, 3, 0, "011"),
    new ProdottoFreddo("Kit Kat", "../../../assets/ProdottiFreddi/kitkat.png", 1.10, 3, 0, "012"),
    new ProdottoFreddo("Red Bull", "../../../assets/ProdottiFreddi/redbul.png", 1.80, 3, 0, "013"),
    new ProdottoFreddo("Schiacciatine", "../../../assets/ProdottiFreddi/schiacciatine.png", 0.60, 3, 0, "014"),
    new ProdottoFreddo("Tuc", "../../../assets/ProdottiFreddi/tuc.png", 0.70, 3, 0, "015")
  ]

  prodottoScelto: Prodotto | undefined = undefined;

  bevandaCaldaScelta: BevandaCalda | undefined = undefined;

  constructor(private sys: SystemService) { }

  getBevandeCalde(): BevandaCalda[] {
    return this.bevandeCalde;
  }

  getProdottiFreddi(): ProdottoFreddo[] {
    return this.prodottiFreddi;
  }

  getBevandaCaldaScelta(): BevandaCalda | undefined {
    return this.bevandaCaldaScelta
  }

  getProdottoScelto(): Prodotto | undefined {
    return this.prodottoScelto
  }

  erogaProdottoCaldo(prodottoCaldoScelto: BevandaCalda): number {
    this.prodottoScelto = this.bevandaCaldaScelta = prodottoCaldoScelto;
    return 0;
  }

  confermaProdotto(zucchero:number|null): number {

    if (this.prodottoScelto) {
      if (this.prodottoScelto.qtaDisponibile > 0) {
        if (this.sys.getCredito() >= this.prodottoScelto.prezzo) {
          //Verificare che il pagamento vada a buon fine
          this.sys.scalaCredito(this.prodottoScelto.prezzo)

          this.prodottoScelto.qtaDisponibile--;
          this.prodottoScelto.qtaVenduta++;

          if(this.bevandaCaldaScelta)
          {
            if(zucchero){
              this.bevandaCaldaScelta.zucchero = zucchero;
            }
            console.log("La bevanda ha " + this.bevandaCaldaScelta.zucchero + " di zucchero")
          }

          return 0;
        } else {
          return 4 //credito insuficiente
        }
      } else {
        return 3; //prodotto terminato
      }
    } else {
      return 2; //prodotto non valido
    }

    return 1; // errore imprevisto
  }

  erogaProdottoFreddo(idProdotto: string): number {
    this.prodottoScelto = this.prodottiFreddi.find(p => p.id == idProdotto);
    this.bevandaCaldaScelta = undefined;

    return this.confermaProdotto(null);
  }
}
