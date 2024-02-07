import { Prodotto } from "./Prodotto";

export class ProdottoFreddo extends Prodotto
{
      constructor(
            nome:string,
            img:string,
            prezzo:number,
            qtaDisponibile:number,
            qtaVenduta:number,
            public id:string)
      {
            super(nome, img, prezzo, qtaDisponibile, qtaVenduta);
      }
}