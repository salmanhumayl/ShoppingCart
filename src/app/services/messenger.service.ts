import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';


import { ProductService } from 'src/app/services/product.service';



@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private productmessage=new Subject();

  isLoggedIn$=new BehaviorSubject(false);
  strFilterProduct=new BehaviorSubject("");

  currentCartCount = new BehaviorSubject(0);
 //currentMessage = this.currentCartCount.asObservable();
 productAddedTocart:Product[];
 cartTotal$ = new BehaviorSubject<Number>(0);

  getCartCount()
  {
    return this.currentCartCount.asObservable();
  }

  constructor(private _itemService:ProductService) {

    this.productAddedTocart=this._itemService.getProductFromCart();
    if (this.productAddedTocart!=null)
    {
      let total=0;
      for (let i in this.productAddedTocart)
      {

       total+=this.productAddedTocart[i].qty * this.productAddedTocart[i].price;

      }
      this.cartTotal$.next(total);

    }
  }


  sendMsg(product:Product[]){
    this.productmessage.next(product);

  }
  getMsg(){
    return this.productmessage.asObservable();

  }

  updateCartCount(count: number) {

    this.currentCartCount.next(count)
  }

}
