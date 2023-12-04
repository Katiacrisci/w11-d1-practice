import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  endpoint!: string;
  constructor(private httpClient: HttpClient) {
    this.endpoint = 'https://dummyjson.com/products';
  }

  getAllProducts(): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(this.endpoint);
  }
}
