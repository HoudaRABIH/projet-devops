import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

type Product = {
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: Product[] = [];
  selectedCategory = 'Tous';
  showCart = false;

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    const response = await fetch('http://localhost:8000/products');
    this.products = await response.json();
    this.filteredProducts = this.products;
    this.cdr.detectChanges();
  }

  filterCategory(category: string) {
    this.selectedCategory = category;

    this.filteredProducts = category === 'Tous'
      ? this.products
      : this.products.filter(product => product.category === category);
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  toggleCart() {
    this.showCart = !this.showCart;

    setTimeout(() => {
      document.getElementById('cart')?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  }

  order() {
    const fullName = prompt('Entrez votre nom complet :');
    const phone = prompt('Entrez votre numéro de téléphone :');

    if (!fullName || !phone) {
      alert('Commande annulée. Nom et numéro obligatoires.');
      return;
    }

    alert(`Merci ${fullName} ! Votre commande est enregistrée. Nous allons vous contacter au ${phone} pour confirmer.`);
    this.cart = [];
    this.showCart = false;
  }
}
