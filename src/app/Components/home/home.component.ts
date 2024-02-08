import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SystemService } from '../../Service/system.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  credito : number;

  constructor(sys:SystemService)
  {
    this.credito = sys.getCredito();
  }
}
