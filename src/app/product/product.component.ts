import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService, Product } from '../serv.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  serv = inject(ServService)
  route = inject(Router)
  actroute = inject(ActivatedRoute)

  detaileditem: Product | undefined;
  ngOnInit(): void {
    this.actroute.params.subscribe(data => {
      const id = +data["id"];
      this.detaileditem = this.serv.products.find(el => el.id === id)
    })
  }
}
