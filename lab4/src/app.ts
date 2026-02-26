import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'online-store';
}