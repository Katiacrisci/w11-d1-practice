import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  endpoint!: string;
  constructor(private httpClient: HttpClient) {
    this.endpoint = 'https://dummyjson.com/products';
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.endpoint);
  }
}
