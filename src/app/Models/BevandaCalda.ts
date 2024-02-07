import { Prodotto } from "./Prodotto";

export class BevandaCalda extends Prodotto
{
      constructor(
            nome:string,
            img:string,
            prezzo:number,
            qtaDisponibile:number,
            qtaVenduta:number,
            public zucchero:number = 0) 
      {
            super(nome, img, prezzo, qtaDisponibile, qtaVenduta);
      }
}
