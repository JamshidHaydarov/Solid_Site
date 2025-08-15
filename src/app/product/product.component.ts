import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService, Product } from '../serv.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  serv = inject(ServService)
  route = inject(Router)
  actroute = inject(ActivatedRoute)
  product_id: number = 0
  detaileditem: Product | undefined;

  ngOnInit(): void {
    this.actroute.params.subscribe(data => {
      const id = +data["id"];
      this.product_id = Number(data['id'])
      this.detaileditem = this.serv.products.find(el => el.id === id)
    })
  }

  add_to_cart(count: any, size: any) {
    let item = this.serv.products.filter(data => {
      return this.product_id === data.id
    })[0]
    let realitem: any = {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      size: size,
      count: count
    }
    this.serv.cart_array.update(data => [...data, realitem])
    this.serv.showCustomAlert();
    this.route.navigate(['/haridor']);

  }


}
