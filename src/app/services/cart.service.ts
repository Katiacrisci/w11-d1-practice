import { Injectable, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  cartItems!: CartItem[];

  constructor() {}

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cart')!);
  }

  getItems(): CartItem[] {
    return this.cartItems;
  }


  addItem(item: Product): CartItem[] {
    let amount: number =
      this.cartItems.filter((i) => i.id === item.id).length + 1;
    let totalPrice: number = item.price * amount;

    let cartItem: CartItem = { ...item, amount, totalPrice };

    this.cartItems.push(cartItem);

    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    return this.cartItems;
  }

  removeItem(item: Product): CartItem[] {
    let amount: number =
      this.cartItems.filter((i) => i.id === item.id).length - 1;
    let totalPrice: number = item.price * amount;
    let cartItem: CartItem = { ...item, amount, totalPrice };

    if (amount === 0) {
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));

      return this.cartItems;
    }

    this.cartItems[this.cartItems.indexOf(cartItem)].amount = amount;
    this.cartItems[this.cartItems.indexOf(cartItem)].totalPrice = totalPrice;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));

    return this.cartItems;
  }
}
