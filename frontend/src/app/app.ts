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
    try {
      const response = await fetch('http://51.44.222.185:8000/products');
      const data = await response.json();
      this.products = data;
      this.filteredProducts = data;
      this.cdr.detectChanges();
    } catch (error) {
      console.error('ERROR:', error);
    }
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = category === 'Tous'
      ? this.products
      : this.products.filter(p => p.category === category);
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  toggleCart() {
    this.showCart = !this.showCart;
    setTimeout(() => {
      document.getElementById('cart')?.scrollIntoView({ behavior: 'smooth' });
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
