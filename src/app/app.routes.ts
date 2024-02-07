import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BevandeCaldeComponent } from './Components/bevande-calde/bevande-calde.component';
import { ProdottiFreddiComponent } from './Components/prodotti-freddi/prodotti-freddi.component';
import { ChiSiamoComponent } from './Components/chi-siamo/chi-siamo.component';

export const routes: Routes = [
      {path: "", component : HomeComponent},
      {path: "chisiamo", component : ChiSiamoComponent},
      {path: "calde", component : BevandeCaldeComponent},
      {path: "fredde", component : ProdottiFreddiComponent}
];
