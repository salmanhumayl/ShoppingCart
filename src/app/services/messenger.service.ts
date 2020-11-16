import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private productmessage=new Subject();

  isLoggedIn=new BehaviorSubject(false);
  strFilterProduct=new BehaviorSubject("");

  currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();

  //getCartCount()
  //{
    //return this.currentCartCount.asObservable();
  //}

  constructor() { }


  sendMsg(product){
    this.productmessage.next(product);

  }
  getMsg(){
    return this.productmessage.asObservable();

  }

  updateCartCount(count: number) {

    this.currentCartCount.next(count)
  }
}
