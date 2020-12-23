import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import{Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  sum=0;
  onChangeItem: Subject<Product[]> = new Subject<Product[]>();


  filterproducts:Product[]=[
    new Product(0,'Total Quartz','This is the product 1 description.The product is really very Kool!',100,'https://www.lubeforce.co.za/Areas/v2/Content/images/product/detailed/car-oil-products/quartz-4000-sm-10w40-20w50.png',
    3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
    ['https://www.lubeforce.co.za/Areas/v2/Content/images/product/detailed/car-oil-products/quartz-4000-sm-10w40-20w50.png',
    'https://5.imimg.com/data5/QA/SY/MY-5192900/3384510-castrol-edge-ti-5w-40-car-engine-oil-284-l-29-500x500.png',
    'https://5.imimg.com/data5/QZ/JD/LZ/SELLER-30246938/total-quartz-3000-20w50-car-engine-oil-500x500.jpg',
    'https://www.totalparco.com.pk/sites/g/files/wompnd651/f/atoms/image/products_0.png',
    'https://sc02.alicdn.com/kf/UT8kBq3XLBXXXagOFbXX.jpg']
    )
  ]

  products:Product[]=[
    new Product(0,'Total Quartz','This is the product 1 description.The product is really very Kool!',100,'assets/img/product01.png',
    3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
    ['assets/img/product01.png',
    'assets/img/product03.png',
    'assets/img/product04.png',
    'assets/img/product06.png',
    'assets/img/product08.png']
    ),

    new Product(1,'Total Quartz Ineco First','This is the product 1 description.The product is really very Kool!',150,'assets/img/product02.png',
    3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
    ['assets/img/product02.png',
      'assets/img/product05.png',
      'assets/img/product05.png',
      'assets/img/product05.png',
      'assets/img/product05.png']),

    new Product(2,'Product 8','This is the product 1 description.The product is really very Kool!',450,'assets/img/product03.png',
    3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
    ['assets/img/product01.png',
    'assets/img/product03.png',
    'assets/img/product04.png',
    'assets/img/product06.png',
    'assets/img/product08.png']),


        new Product(3,'Total Quartz','This is the product 1 description.The product is really very Kool!',100,'assets/img/product04.png',
        3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
        ['assets/img/product01.png',
    'assets/img/product03.png',
    'assets/img/product04.png',
    'assets/img/product06.png',
    'assets/img/product08.png']
        ),

        new Product(4,'Total Quartz','This is the product 1 description.The product is really very Kool!',100,'assets/img/product06.png',
        3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
        ['assets/img/product01.png',
        'assets/img/product03.png',
        'assets/img/product04.png',
        'assets/img/product06.png',
        'assets/img/product08.png']
        ),

        new Product(5,'Total Quartz','This is the product 1 description.The product is really very Kool!',100,'assets/img/product07.png',
    3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
    ['assets/img/product01.png',
    'assets/img/product03.png',
    'assets/img/product04.png',
    'assets/img/product06.png',
    'assets/img/product08.png']
    ),
  ];

  constructor() {

  }
    getProducts():Product[]
    {
      return this.products;

    }

    getFilterProducts():Product[]
    {

      return this.filterproducts;

    }

    getItemsById(id: number) {
     // alert("getItemsById");
     // alert(this.products[id].price);
      return this.products[id];

    }

     addRating(index: number, newRate: number) {
      this.products[index].ratings.push(newRate);
      this.products[index].ratingCounter++;

      this.sum = 0;

      for (const rate of this.products[index].ratings) {
        this.sum = this.sum + rate;
      }
      this.products[index].avg = parseFloat((this.sum / this.products[index].ratingCounter).toFixed(1));
      //this.onChangeItem.next(this.items.slice());
    }

    addReview(index: number, newReview: string) {
      this.products[index].reviews.push(newReview);
      this.products[index].reviewCounter++;
     // this.onChangeItem.next(this.products.slice());
    }


    AddProductToCard(products:any){
      localStorage.setItem("product",JSON.stringify(products));


    }
    getProductFromCart(){
      return JSON.parse(localStorage.getItem('product'));


    }
    removeAllProductFromCart() {

      localStorage.removeItem("product");
    }


}
