import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  sizes: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ServService {

  products: Product[] = [
    {
      id: 1,
      name: "Ko'ylak",
      price: 250000,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Ko'ylak",
      price: 175000,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      sizes: ["S", "M", "L", "XL", "XXL"]
    }, {
      id: 3,
      name: "Ko'ylak",
      price: 150000,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      sizes: ["S", "M", "L", "XL", "XXL"]
    }, {
      id: 4,
      name: "Ko'ylak",
      price: 225000,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
  ]

  constructor() { }
}
