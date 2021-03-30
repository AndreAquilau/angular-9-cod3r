import { Product } from './../product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product: Product= {
    description: '',
    price: null,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(`${id}`).subscribe(product => {
      console.log(product, 'produto')
      this.product = product[0];
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe( (res) => {
      console.log(res);
      this.productService.showMessage("Produto atualizado com sucesso!!!");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
