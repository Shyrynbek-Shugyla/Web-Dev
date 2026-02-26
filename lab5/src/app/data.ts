export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  link: string;
  likes: number;
}
export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  link: string;
  likes: number;
}

export const categories = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Audio' },
  { id: 4, name: 'Wearables' }
];

export const products: Product[] = [
  // --- Category 1: Smartphones ---
  {
    id: 1, categoryId: 1, name: 'iPhone 15 Pro', description: '128 GB, Natural Titanium, A17 Pro Chip', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium', 
    rating: 5, price: 530000, likes: 0, link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-sim-natural-titanium-113565406/'
  },
  {
    id: 2, categoryId: 1, name: 'Samsung Galaxy S24 Ultra', description: '256 GB, Titanium Gray, AI Camera', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium', 
    rating: 5, price: 495000, likes: 0, link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12gb-256gb-seryi-116043556/'
  },
  {
    id: 3, categoryId: 1, name: 'Xiaomi 14', description: '12/512 GB, Black, Leica Optics', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium', 
    rating: 4, price: 399000, likes: 0, link: 'https://kaspi.kz/shop/p/xiaomi-14-12-gb-512-gb-chernyi-117361406/'
  },
  {
    id: 4, categoryId: 1, name: 'Google Pixel 8', description: '128 GB, Hazel, Pure Android', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h48/h8e/86037204303902.jpg?format=gallery-medium', 
    rating: 4, price: 310000, likes: 0, link: 'https://kaspi.kz/shop/p/google-pixel-8-8-128-gb-seryi-113645391/'
  },
  {
    id: 5, categoryId: 1, name: 'iPhone 13', description: '128 GB, Midnight, Classic Design', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
    rating: 5, price: 295000, likes: 0, link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-102298404/'
  },

  // --- Category 2: Laptops ---
  {
    id: 6, categoryId: 2, name: 'MacBook Air 13 M2', description: '8/256 GB, Space Gray, Liquid Retina', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium', 
    rating: 5, price: 475000, likes: 0, link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-105533532/'
  },
  {
    id: 7, categoryId: 2, name: 'ASUS ROG Zephyrus G14', description: 'Ryzen 9, RTX 4060, 120Hz Display', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p21/45049162.png?format=gallery-medium', 
    rating: 5, price: 850000, likes: 0, link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga402xv-n2019-14-16-gb-ssd-512-gb-bez-os-90nr0df1-m001v0-110825964/'
  },
  {
    id: 8, categoryId: 2, name: 'Lenovo Legion 5', description: 'Core i7, RTX 4050, RGB Keyboard', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/pb8/59691124.JPG?format=gallery-medium', 
    rating: 4, price: 580000, likes: 0, link: 'https://kaspi.kz/shop/p/lenovo-legion-5-15irp8-82y5000urk-15-6-16-gb-ssd-512-gb-bez-os-114704706/'
  },
  {
    id: 9, categoryId: 2, name: 'HP Victus 15', description: 'Ryzen 5, GTX 1650, Performance Cooling', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hcc/85983814680606.png?format=gallery-medium', 
    rating: 4, price: 290000, likes: 0, link: 'https://kaspi.kz/shop/p/hp-victus-15-fb0026nr-15-6-8-gb-ssd-512-gb-bez-os-112321451/'
  },
  {
    id: 10, categoryId: 2, name: 'Acer Aspire 5', description: 'Core i5, 16 GB RAM, FHD Display', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p76/p0f/55291864.jpg?format=gallery-medium', 
    rating: 3, price: 245000, likes: 0, link: 'https://kaspi.kz/shop/p/acer-aspire-5-a515-57-5452-15-6-16-gb-ssd-512-gb-bez-os-nx-k8zer-00e-111100235/'
  },

  // --- Category 3: Audio ---
  {
    id: 11, categoryId: 3, name: 'AirPods Pro 2', description: 'USB-C, Active Noise Cancellation', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium', 
    rating: 5, price: 115000, likes: 0, link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-case-belyi-113677582/'
  },
  {
    id: 12, categoryId: 3, name: 'Sony WH-1000XM5', description: 'Wireless, Black, Industry Leading NC', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium', 
    rating: 5, price: 155000, likes: 0, link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221444/'
  },
  {
    id: 13, categoryId: 3, name: 'Marshall Major IV', description: 'Brown, 80+ Hours of Battery Life', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium', 
    rating: 4, price: 65000, likes: 0, link: 'https://kaspi.kz/shop/p/marshall-major-iv-korichnevyi-101150334/'
  },
  {
    id: 14, categoryId: 3, name: 'Samsung Galaxy Buds2 Pro', description: 'Graphite, 24-bit Hi-Fi Sound', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h8a/86487901962270.png?format=gallery-medium', 
    rating: 4, price: 72000, likes: 0, link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-chernyi-106128695/'
  },
  {
    id: 15, categoryId: 3, name: 'JBL Tune 510BT', description: 'Wireless On-Ear Headphones, Blue', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium', 
    rating: 4, price: 21000, likes: 0, link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-sinii-101423458/'
  },

  // --- Category 4: Wearables ---
  {
    id: 16, categoryId: 4, name: 'Apple Watch Series 9', description: '45mm, Midnight, Heart Rate Sensor', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium', 
    rating: 5, price: 195000, likes: 0, link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-45-mm-temno-sinii-113137682/'
  },
  {
    id: 17, categoryId: 4, name: 'Samsung Galaxy Watch 6', description: '44mm, Graphite, Sleep Tracking', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h31/82569351266334.jpg?format=gallery-medium', 
    rating: 5, price: 95000, likes: 0, link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-6-44-mm-chernyi-112108709/'
  },
  {
    id: 18, categoryId: 4, name: 'Huawei Watch GT 4', description: '46mm, Brown Leather Strap', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/h94/83881081372702.jpg?format=gallery-medium', 
    rating: 4, price: 89000, likes: 0, link: 'https://kaspi.kz/shop/p/huawei-watch-gt-4-46-mm-serebristyi-113714578/'
  },
  {
    id: 19, categoryId: 4, name: 'Amazfit GTS 4', description: 'Black, AMOLED, Smart Health Tracking', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h1e/64232743010334.jpg?format=gallery-medium', 
    rating: 4, price: 68000, likes: 0, link: 'https://kaspi.kz/shop/p/amazfit-gts-4-chernyi-107055745/'
  },
  {
    id: 20, categoryId: 4, name: 'Xiaomi Redmi Watch 3', description: 'Black, Built-in GPS', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/hb5/80176157327390.jpg?format=gallery-medium', 
    rating: 3, price: 35000, likes: 0, link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-3-chernyi-109312560/'
  }
];