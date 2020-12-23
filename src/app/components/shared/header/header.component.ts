import { Component, Input, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'
import { ProductService } from 'src/app/services/product.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {Product} from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount:number=0;

  isLoggedIn:boolean;
  productAddedTocart:Product[];
  @Input()
  Total:Number;

  allTotal:Number=0;
  lEmptyCard:boolean=false;

  constructor(private msg:MessengerService,private _itemService:ProductService,
    public auth: AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
   // alert("header");
    this.productAddedTocart=this._itemService.getProductFromCart(); // in case user click f5 / refresh
    if (this.productAddedTocart!=null){
    this.msg.updateCartCount(this.productAddedTocart.length);

    }

    this.msg.getCartCount().subscribe((MyCount:number)=>{
           this.cartItemCount = MyCount;
           //alert("getCartCount");
        })

        this.msg.getMsg().subscribe((product:Product[])=>{
          this.productAddedTocart=product;
          this.calculteAllTotal(this.productAddedTocart)

        })

        this.msg.cartTotal$.subscribe(data => this.allTotal= data);

        this.msg.isLoggedIn$.subscribe(data => this.isLoggedIn= data);
        if (!this.isLoggedIn)
    {
      if (this.auth.isAuthenticated())
      {
         this.isLoggedIn=true;
      }
}


  }

  calculteAllTotal(product:Product[]){
    let total=0;
    for (let i in product)
    {

      total=total+ (product[i].qty * product[i].price)
    }
     this.allTotal=total;
}



}
