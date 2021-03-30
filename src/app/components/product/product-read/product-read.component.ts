import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Product[];

  displayedColumns: string[] =['id', 'description', 'price', 'action']

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products[0];
      console.log(products[0]);
    })
  }


}
