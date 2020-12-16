import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[];

  constructor(private http: HttpClient) {
  }

  addToCart(product) {
    this.items.push();
    console.log(this.items)
  }

  getItems() {
    console.log(this.items)
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
