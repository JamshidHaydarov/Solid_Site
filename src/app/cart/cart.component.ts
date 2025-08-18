import { Component, computed, inject, signal } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  serv = inject(ServService)
  total_price: number = 0
  total_item_price(price: number, count: number) {
    return price * count
  }


}
