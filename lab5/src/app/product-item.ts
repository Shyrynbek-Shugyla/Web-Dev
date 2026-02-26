import { Component, input, output, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../data';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html', // Сенде файл аты осындай болуы мүмкін
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  // Тізімнен келетін бір тауар
  product = input.required<Product>();
  
  // Өшіру оқиғасын жоғарыға (тізімге) жіберу
  remove = output<number>();
isLiked = signal<boolean>(false);
  // Лайк қосу (локальді түрде)
 like() {
    if (!this.isLiked()) {
      // Егер лайк басылмаған болса, қосамыз
      this.product().likes++;
      this.isLiked.set(true);
    } else {
      // Егер бұрын басылған болса, қайтадан азайтамыз (алып тастаймыз)
      this.product().likes--;
      this.isLiked.set(false);
    }
  }

  // Өшіру батырмасын басқанда
  delete() {
    this.remove.emit(this.product().id);
  }

  // Каспиге бөлісу
  share(platform: string) {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(`Мына тауарды қара: ${this.product().name}`);
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${text}%20${url}`);
    } else {
      window.open(`https://t.me/share/url?url=${url}&text=${text}`);
    }
  }
}