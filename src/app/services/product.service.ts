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
    new Product(0,'Total Quartz','This is the product 1 description.The product is really very Kool!',100,'https://www.lubeforce.co.za/Areas/v2/Content/images/product/detailed/car-oil-products/quartz-4000-sm-10w40-20w50.png',
    3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
    ['https://www.lubeforce.co.za/Areas/v2/Content/images/product/detailed/car-oil-products/quartz-4000-sm-10w40-20w50.png',
    'https://5.imimg.com/data5/QA/SY/MY-5192900/3384510-castrol-edge-ti-5w-40-car-engine-oil-284-l-29-500x500.png',
    'https://5.imimg.com/data5/QZ/JD/LZ/SELLER-30246938/total-quartz-3000-20w50-car-engine-oil-500x500.jpg',
    'https://www.totalparco.com.pk/sites/g/files/wompnd651/f/atoms/image/products_0.png',
    'https://sc02.alicdn.com/kf/UT8kBq3XLBXXXagOFbXX.jpg']
    ),

    new Product(1,'Total Quartz Ineco First','This is the product 1 description.The product is really very Kool!',150,'https://images-na.ssl-images-amazon.com/images/I/51qz7%2BRwoKL.jpg',
    3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
    ['https://fscl01.fonpit.de/userfiles/6727621/image/2017/lenovo-moto-g5/AndroidPIT-lenovo-moto-g5-1120-w810h462.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs5vZtDVm21sb-dInaZ-7qJXJCqNKzDTc50UO3-G97A6zGNf5k',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREu8RL-q4hMdHZOu9rSRHLxFCVuRT7yvOHJrKlFmrReO0iWqX0',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOU0ZGLS85pB9_-b692rHeuY1siTxlalWlaybOuNJhbZJMlKNQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR1g_Ee8u3W_6o2oBZipC3L6qsDBb5jD9Dde9qMA1BNDXbFzgL']),

    new Product(2,'Product 8','This is the product 1 description.The product is really very Kool!',450,'https://images-na.ssl-images-amazon.com/images/I/51qz7%2BRwoKL.jpg',
    3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
    ['https://fscl01.fonpit.de/userfiles/6727621/image/2017/lenovo-moto-g5/AndroidPIT-lenovo-moto-g5-1120-w810h462.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs5vZtDVm21sb-dInaZ-7qJXJCqNKzDTc50UO3-G97A6zGNf5k',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREu8RL-q4hMdHZOu9rSRHLxFCVuRT7yvOHJrKlFmrReO0iWqX0',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOU0ZGLS85pB9_-b692rHeuY1siTxlalWlaybOuNJhbZJMlKNQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR1g_Ee8u3W_6o2oBZipC3L6qsDBb5jD9Dde9qMA1BNDXbFzgL']),


        new Product(3,'Total Quartz','This is the product 1 description.The product is really very Kool!',100,'https://www.lubeforce.co.za/Areas/v2/Content/images/product/detailed/car-oil-products/quartz-4000-sm-10w40-20w50.png',
        3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
        ['https://images-na.ssl-images-amazon.com/images/I/71fn9y29lNL._SL1500_.jpg',
        'https://5.imimg.com/data5/QA/SY/MY-5192900/3384510-castrol-edge-ti-5w-40-car-engine-oil-284-l-29-500x500.png',
        'https://5.imimg.com/data5/QZ/JD/LZ/SELLER-30246938/total-quartz-3000-20w50-car-engine-oil-500x500.jpg',
        'https://www.totalparco.com.pk/sites/g/files/wompnd651/f/atoms/image/products_0.png',
        'https://sc02.alicdn.com/kf/UT8kBq3XLBXXXagOFbXX.jpg']
        ),

        new Product(4,'Total Quartz','This is the product 1 description.The product is really very Kool!',100,'https://www.lubeforce.co.za/Areas/v2/Content/images/product/detailed/car-oil-products/quartz-4000-sm-10w40-20w50.png',
        3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
        ['https://images-na.ssl-images-amazon.com/images/I/71fn9y29lNL._SL1500_.jpg',
        'https://5.imimg.com/data5/QA/SY/MY-5192900/3384510-castrol-edge-ti-5w-40-car-engine-oil-284-l-29-500x500.png',
        'https://5.imimg.com/data5/QZ/JD/LZ/SELLER-30246938/total-quartz-3000-20w50-car-engine-oil-500x500.jpg',
        'https://www.totalparco.com.pk/sites/g/files/wompnd651/f/atoms/image/products_0.png',
        'https://sc02.alicdn.com/kf/UT8kBq3XLBXXXagOFbXX.jpg']
        ),

        new Product(5,'Total Quartz','This is the product 1 description.The product is really very Kool!',100,'https://www.lubeforce.co.za/Areas/v2/Content/images/product/detailed/car-oil-products/quartz-4000-sm-10w40-20w50.png',
    3, ['good', 'bad', 'okok'], 3, [3, 5, 3], 3.3,
    ['https://images-na.ssl-images-amazon.com/images/I/71fn9y29lNL._SL1500_.jpg',
    'https://5.imimg.com/data5/QA/SY/MY-5192900/3384510-castrol-edge-ti-5w-40-car-engine-oil-284-l-29-500x500.png',
    'https://5.imimg.com/data5/QZ/JD/LZ/SELLER-30246938/total-quartz-3000-20w50-car-engine-oil-500x500.jpg',
    'https://www.totalparco.com.pk/sites/g/files/wompnd651/f/atoms/image/products_0.png',
    'https://sc02.alicdn.com/kf/UT8kBq3XLBXXXagOFbXX.jpg']
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
