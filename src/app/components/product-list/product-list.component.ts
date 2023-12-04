import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductResponse } from '../../models/product-response';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription!: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService
      .getAllProducts()
      .subscribe((response: ProductResponse) => {
        this.products = response.products;
        console.log(this.products);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
