import { Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  sizes: string[];

}


export interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  count?: number,
  size?: string
}
@Injectable({
  providedIn: 'root'
})
export class ServService {
  total_cart_price: number = 0

  cart_array = signal<CartItem[]>([
    {
      id: 1,
      name: "Ko'ylak Turkiya",
      price: 175000,
      description: "Lorem ipsvum sdnaidbsadbnsahdnsadnj",
      count: 2,
      size: "L"
    }
  ])

  products: Product[] = [
    {
      id: 1,
      name: "Ko'ylak",
      price: 250000,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. dsadsa dsadsa dsa dsads adsa dasdas dsad as',
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 2,
      name: "Ko'ylak",
      price: 175000,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      sizes: ["S", "M", "L", "XL", "XXL"],
    }, {
      id: 3,
      name: "Ko'ylak",
      price: 150000,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      sizes: ["S", "M", "L", "XL", "XXL"],
    }, {
      id: 4,
      name: "Ko'ylak",
      price: 225000,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  ]
  alertMessage = "Savatchaga qo'shildi✅ "
  showAlert = false
  showCustomAlert() {
    this.showAlert = true;
    setTimeout(() => this.showAlert = false, 3000);
  }
  closeAlert() {
    this.showAlert = false;
  }
  total_cart_price_func() {
    this.cart_array().map(data => this.total_cart_price += data.price * data.count!)
    console.log(this.total_cart_price);

  }

  constructor() { }
}
