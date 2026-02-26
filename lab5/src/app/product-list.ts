import { Component, input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item'; // Карточка компоненті
import { products as initialProducts, Product } from '../data'; // Мәліметтер файлы

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  // 1. Сыртынан (AppComponent-тен) келетін категория ID-і
  categoryId = input.required<number>();

  // 2. Тауарлар тізімін сигнал ретінде сақтаймыз (өшіру үшін ыңғайлы)
  productsList = signal<Product[]>(initialProducts);

  // 3. Таңдалған категорияға байланысты сүзілген тауарлар
  filteredProducts = computed(() => {
    return this.productsList().filter(p => p.categoryId === this.categoryId());
  });

  // 4. Тауарды өшіру функциясы
  handleRemove(productId: number) {
    this.productsList.update(prods => prods.filter(p => p.id !== productId));
  }
}