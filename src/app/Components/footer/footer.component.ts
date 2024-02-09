import { Component } from '@angular/core';
import { SystemService } from '../../Service/system.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  versione:string;

  constructor(sys:SystemService){
    this.versione = sys.getVersione();
  }
}
