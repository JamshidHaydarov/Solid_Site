import { Component, inject } from '@angular/core';
import { ServService } from '../serv.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TrimmerPipe } from '../trimmer.pipe';


@Component({
  selector: 'app-haridor',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TrimmerPipe],
  templateUrl: './haridor.component.html',
  styleUrl: './haridor.component.css'
})
export class HaridorComponent {
  service = inject(ServService)
  router = inject(Router)
  ProductId = 0
  router_checker(id: number) {
    this.router.navigate(['/haridor', id]);

  }
  trimmerP = inject(TrimmerPipe)
}
