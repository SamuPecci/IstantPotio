import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from '../../Service/system.service';

@Component({
  selector: 'app-heder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heder.component.html',
  styleUrl: './heder.component.css'
})
export class HederComponent {

  home:boolean;
  credito:number

  constructor(private route:ActivatedRoute, private sys:SystemService)
  {
    this.credito = sys.getCredito();

    this.home = this.route.snapshot.url.length == 0;
  }
}
