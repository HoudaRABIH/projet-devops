import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-root', standalone: true, imports: [CommonModule], templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent {
  cartOpen = false;
  cartItems: any[] = [];
  products = [
    { id:1, name:'Sac Tote Cuir', price:299, image:'https://placehold.co/300x250/c9a882/fff?text=Sac+Tote' },
    { id:2, name:'Sac a Dos Cuir', price:350, image:'https://placehold.co/300x250/8B4513/fff?text=Sac+Dos' },
    { id:3, name:'Ceinture Noire', price:150, image:'https://placehold.co/300x250/1C1410/fff?text=Ceinture' },
    { id:4, name:'Sac Business', price:279, image:'https://placehold.co/300x250/6B3F2A/fff?text=Sac+Business' },
  ];
  addToCart(p: any){ this.cartItems.push(p); this.cartOpen=true; }
  getTotal(){ return this.cartItems.reduce((s,i)=>s+i.price,0); }
}
