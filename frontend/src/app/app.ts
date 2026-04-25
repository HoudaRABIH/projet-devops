import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({ selector: 'app-root', standalone: true, imports: [CommonModule, HttpClientModule], templateUrl: './app.html', styleUrls: ['./app.css'] })
export class App implements OnInit {
  cartOpen = false;
  cartItems: any[] = [];
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8000/api/products')
      .subscribe({
        next: (data: any) => {
          this.products = data;
        },
        error: (err) => {
          console.error('Erreur API:', err);
        }
      });
  }

  addToCart(p: any){ this.cartItems.push(p); this.cartOpen=true; }
  getTotal(){ return this.cartItems.reduce((s,i)=>s+i.price,0); }
}
