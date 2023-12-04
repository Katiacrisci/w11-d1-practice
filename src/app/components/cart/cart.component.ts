import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getItems();
  }

  ngOnInit(): void {
    console.log(this.cart)
    console.warn(`storage:`, JSON.parse(localStorage.getItem('cart')!))
  }
}
