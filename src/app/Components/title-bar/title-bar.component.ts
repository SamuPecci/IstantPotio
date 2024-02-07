import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {
  titolo : string;

  constructor(private route : ActivatedRoute)
  {
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

      default:
        this.titolo = "PAGINA";
    }
  }
}
