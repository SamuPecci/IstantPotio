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

  private bevandeCalde : BevandaCalda[] = [
    new BevandaCalda("Espresso", "../../../assets/BevandeCalde/espresso.jpg", 0.80, 3, 0),
    new BevandaCalda("Latte", "../../../assets/BevandeCalde/latte.jpg", 1, 3, 0),
    new BevandaCalda("Té limone", "../../../assets/BevandeCalde/te.jpg", 0.70, 3, 0),
    new BevandaCalda("Caffè lungo", "../../../assets/BevandeCalde/lungo.jpg", 0.80, 3, 0),
    new BevandaCalda("Caffè corto", "../../../assets/BevandeCalde/corto.jpeg", 0.80, 3, 0),
    new BevandaCalda("Caffè macchiato", "../../../assets/BevandeCalde/macchiato.jpg", 0.90, 3, 0),
    new BevandaCalda("Ginseng", "../../../assets/BevandeCalde/ginseng.webp", 1.10, 3, 0),
    new BevandaCalda("Cappuccino", "../../../assets/BevandeCalde/cappuccio.webp", 1.20, 3, 0),
    new BevandaCalda("Latte macchiato", "../../../assets/BevandeCalde/lattemacchiato.webp", 0.80, 3, 0),
    new BevandaCalda("Cioccolata calda", "../../../assets/BevandeCalde/cioccolatacalda.jpg", 0.80, 3, 0),
    new BevandaCalda("Orzo", "../../../assets/BevandeCalde/orzo.jpg", 0.80, 3, 0)
  ]

  private prodottiFreddi : ProdottoFreddo[] = [
    new ProdottoFreddo("Coca Cola", "../../../assets/ProdottiFreddi/coca.jpg", 0.80, 3, 0, "001"),
    new ProdottoFreddo("Kinder Bueno", "../../../assets/ProdottiFreddi/bueno.jpg", 1.00, 3, 0, "002"),
    new ProdottoFreddo("Brioches", "../../../assets/ProdottiFreddi/brioches.jpg", 0.70, 3, 0, "003"),
    new ProdottoFreddo("Powerade", "../../../assets/ProdottiFreddi/energy.jpg", 1.80, 3, 0, "004"),
    new ProdottoFreddo("Estathe pesca", "../../../assets/ProdottiFreddi/estapesca.jpeg", 1.20, 3, 0, "005"),
    new ProdottoFreddo("Estathe limone", "../../../assets/ProdottiFreddi/estalimone.jpg", 1.20, 3, 0, "006"),
    new ProdottoFreddo("Fanta", "../../../assets/ProdottiFreddi/fanta.webp", 1.50, 3, 0, "007"),
    new ProdottoFreddo("Kinder Fiesta", "../../../assets/ProdottiFreddi/fiesta.webp", 1.00, 3, 0, "008"),
    new ProdottoFreddo("Fonzies", "../../../assets/ProdottiFreddi/fonzies.jpg", 1.00, 3, 0, "009"),
    new ProdottoFreddo("Acqua naturale", "../../../assets/ProdottiFreddi/natu.jpg", 0.50, 3, 0, "010"),
    new ProdottoFreddo("Acqua frizzante", "../../../assets/ProdottiFreddi/gas.jpg", 0.50, 3, 0, "011"),
    new ProdottoFreddo("Kit Kat", "../../../assets/ProdottiFreddi/kitkat.webp", 1.10, 3, 0, "012"),
    new ProdottoFreddo("Red Bull", "../../../assets/ProdottiFreddi/redbul.jpg", 1.80, 3, 0, "013"),
    new ProdottoFreddo("Schiacciatine", "../../../assets/ProdottiFreddi/schiacciatine.jpeg", 0.60, 3, 0, "014"),
    new ProdottoFreddo("Tuc", "../../../assets/ProdottiFreddi/tuc.webp", 0.70, 3, 0, "015")
  ]

  prodottoScelto: Prodotto | undefined = undefined;

  constructor(private sys:SystemService) { }
  
  getBevandeCalde() : BevandaCalda[]
  {
    return this.bevandeCalde;
  }

  getProdottiFreddi() : ProdottoFreddo[]
  {
    return this.prodottiFreddi;
  }

  getProdottoScelto() : Prodotto | undefined
  { 
    return this.prodottoScelto
  }

  erogaProdottoCaldo(nomeProdotto:string) : number
  {
    //Da implementare (ovviamente se no sei un coglione!)
    return 0;
  }

  erogaProdottoFreddo(idProdotto:string) : number
  {
    this.prodottoScelto = this.prodottiFreddi.find(p => p.id == idProdotto);
    
    if(this.prodottoScelto){
      if(this.prodottoScelto.qtaDisponibile > 0){
        if(this.sys.getCredito() >= this.prodottoScelto.prezzo){
          //Verificare che il pagamento vada a buon fine
          this.sys.scalaCredito(this.prodottoScelto.prezzo)
          
          this.prodottoScelto.qtaDisponibile--;
          this.prodottoScelto.qtaVenduta++;
    
          return 0;
        } else{
          return 4 //credito insuficiente
        }
      } else{
        return 3; //prodotto terminato
      }
    } else{
      return 2; //prodotto non valido
    }

    return 1; // errore imprevisto
  }
}
