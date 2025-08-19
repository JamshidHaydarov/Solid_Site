import { Component, computed, inject, signal } from '@angular/core';
import { ServService } from '../serv.service';
import { TrimmerPipe } from '../trimmer.pipe';
import { log } from 'node:console';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TrimmerPipe, FormsModule, DatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  today = new Date(new Date()).setDate(new Date().getDate()+3)
  serv = inject(ServService)
  total_price: number = 0
  all_check = false
  total_item_price(price: number, count: number) {
    return price * count
  }

  checking(id:number) {
    let item = this.serv.cart_array().filter(data=> data.id === id)
    item[0].is_checked = !item[0].is_checked;

  }

  checking_all(){
    let allChecked = this.serv.cart_array().every(data=> data.is_checked)

    allChecked? this.serv.cart_array().map(data=> data.is_checked = false): this.serv.cart_array().map(data=> data.is_checked = true)
    this.all_check = !this.all_check
  }
  delete_items(){
    this.serv.cart_array.set(this.serv.cart_array().filter(data => data.is_checked === false))
    this.all_check = false
  }

}
