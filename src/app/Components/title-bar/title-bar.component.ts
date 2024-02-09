import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SystemService } from '../../Service/system.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {
  titolo : string;
  credito : number;

  constructor(private route : ActivatedRoute, private sys : SystemService)
  {
    this.credito = sys.getCredito();

    let r = this.route.snapshot.url[0].path;
    console.log(r);

    switch (r) {
      case "chisiamo":
        this.titolo = "CHI SIAMO";
        break;
      
      case "calde":
        this.titolo = "BEVANDE CALDE";
        break;

      case "fredde":
        this.titolo = "PRODOTTI FREDDI";
        break;

      case "controlPannel":
        this.titolo = "PANNELLO DI CONTROLLO";
        break;

      default:
        this.titolo = "PAGINA";
    }
  }
}
