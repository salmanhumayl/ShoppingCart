import { Component, Input, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'
import { ProductService } from 'src/app/services/product.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  cartItemCount:number=0;

  isLoggedIn:boolean;
  productAddedTocart:Product[];
  @Input()
  Total:Number;

  constructor(private msg:MessengerService,private _itemService:ProductService,
    public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.msg.isLoggedIn$.subscribe(loginIn=> this.isLoggedIn=loginIn)

    if (!this.isLoggedIn)
    {
      if (this.auth.isAuthenticated())
      {
         this.isLoggedIn=true;
      }
}

     alert("nav")






}


}






//this.msg.currentMessage.subscribe(MyCount => this.cartItemCount = MyCount);
//alert("nav")
// this.msg.currentCartCount.subscribe(MyCount => this.cartItemCount = MyCount);

// if (this.cartItemCount==0)
  // {
   //  this.productAddedTocart=this._itemService.getProductFromCart(); // in case user click f5 / refresh
    // this.cartItemCount=this.productAddedTocart.length;
 //}

 //this.msg.currrentCartCount.subscribe(MyCount => this.cartItemCount = MyCount);
