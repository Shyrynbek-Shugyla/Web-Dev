import { Component, input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  product = input.required<Product>();

  share() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
  }
}