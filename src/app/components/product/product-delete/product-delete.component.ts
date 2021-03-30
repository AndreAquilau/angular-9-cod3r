import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    description: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = `${this.route.snapshot.paramMap.get('id')}`;
    this.productService.readById(id).subscribe((product: Product[]) => {
      this.product = product[0];
    });
  }

  deleteProduct() {
    const id = `${this.route.snapshot.paramMap.get('id')}`;
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto Deletado!!!');
      this.router.navigate(['/products']);
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }

}
