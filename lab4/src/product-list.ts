import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Смартфон Apple iPhone 15. Отличная камера и производительность.',
      price: 450000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h93/86303746392094.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h34/83559339261982.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h21/83559332380702.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h40/83559332446238.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Флагманский смартфон Samsung. Мощный процессор и яркий дисплей.',
      price: 380000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h23/84963273736222.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h6d/84963273867294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h58/84963114221598.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h64/h77/84963114188830.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116042629/?c=750000000'
    },
    {
      id: 3,
      name: 'Apple MackBook Pro 14.2',
      description: 'Apple MackBook Pro 14.2 - это мощный и стильный ноутбук для профессионалов.',
      price: 1379848,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p45/p1e/79089383.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/p1e/79089383.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/p1e/79089383.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-24-gb-ssd-512-gb-macos-mx2x3-137245155/?c=750000000'
    },
    {
      id: 4,
      name: 'МФУ Xerox WorkCentre 3025BI',
      description: 'МФУ Xerox WorkCentre 3025BI — компактное и многофункциональное устройство, идеально подходящее для малого офиса.',
      price: 102990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/pb5/3290600.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p21/pb5/3290600.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p21/pb5/3290600.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p21/pb5/3290600.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/mfu-xerox-workcentre-3025bi-1600153/?c=750000000'
    },
      {
      id: 5,
      name: 'Кофемашина DeLonghi',
      description: 'Кофемашина DeLonghi - сочетает в себе множество возможностей для приготовления вкусного кофе.',
      price: 229980,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-ecam220-50-bg-bezhevyi-145399057/?c=750000000'
    },
      {
      id: 6,
      name: 'Apple Watch SE GPS',
      description: 'Apple Watch SE придает вам дополнительную уверенность в безопасности как во время активного отдыха, так и в повседневной жизни.',
      price: 121727,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p18/7079036.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p18/7079036.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p18/7079036.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p18/7079036.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-chernyi-chernyi-129672957/?c=750000000'
    },
      {
      id: 7,
      name: 'Умная колонка Яндекс Станция',
      description: 'Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/?c=750000000'
    },
      {
      id: 8,
      name: 'Dyson id HS08 Straight+Wavy',
      description: 'Устройство создает идеальные локоны одним нажатием кнопки, без теплового повреждения волос.',
      price: 246273,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/p3f/68965799.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb9/p3f/68965799.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb9/p3f/68965799.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb9/p3f/68965799.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-id-hs08-straight-wavy-stailer-rozovyi-mednyi-144498343/?c=750000000'
    },
      {
      id: 9,
      name: 'Электрочайник Smeg',
      description: 'Этот электрический чайник премиум-класса от SMEG с объемом 1,7 л воплощает винтажный дизайн 50-х годов и инновационные технологии.',
      price: 65836,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9e/p24/19177644.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9e/p24/19177644.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9e/p24/19177644.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9e/p24/19177644.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/elektrochainik-smeg-klf04creu-bezhevyi-6301732/?c=750000000'
    },
      {
      id: 10,
      name: 'Смарт-кольцо SR08',
      description: 'Характеристики Смарт-кольцо SR08 серебристый',
      price: 16543,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8a/p7a/26404571.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8a/p7a/26404571.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8a/p7a/26404571.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8a/p7a/26404571.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/smart-kol-tso-sr08-serebristyi-134588669/?c=750000000'
    },
      {
      id: 11,
      name: 'Отпариватель AVENTIX PAR200',
      description: 'AVENTIX 2 в 1 идеальная гладкость и стиль за считанные минуты! Мощность 1300 Вт легко разглаживает даже толстые ткани.',
      price: 13500,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p87/p48/61023361.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p48/61023361.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p48/61023361.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p48/61023361.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/otparivatel-aventix-par200-fioletovyi-144751155/?c=750000000'
    },
      {
      id: 12,
      name: 'Игровая приставка Sony PlayStation 5',
      description: 'Иммерсивный игровой опыт в тонком форм-факторе. Приготовьтесь встречать новую PlayStation 5 Slim.',
      price: 303768,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    
  ];
}