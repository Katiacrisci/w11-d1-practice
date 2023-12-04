import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {

  }

  addToCart() {
    this.cartService.addItem(this.product);
    alert(`${this.product.title} added to cart!`)
  }
  
}
