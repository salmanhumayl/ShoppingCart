import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service'
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productitem:Product;
  @Input() index:number;
  cartItems:Product[]=[];


  cartTotal=0;


 constructor(private msg:MessengerService,private _itemService:ProductService) { }



  ngOnInit(): void {
  }

  handlerAddToCard()
  {

    this.addProductToCart()
  //  this.msg.isLoggedIn.next(true);
    //this.msg.sendMsg(this.productitem);

  }


  addProductToCart(){
  let ProductExit=false;
  this.cartItems=this._itemService.getProductFromCart();

  if (this.cartItems==null)
  {
    this.cartItems=[];
    this.cartItems.push(this.productitem);
    this._itemService.AddProductToCard(this.cartItems);

  }
  else
  {
    let tempProduct=this.cartItems.find(p=>p.id==this.productitem.id)
      if (tempProduct==null)
      {
        this.cartItems.push(this.productitem);
        this._itemService.AddProductToCard(this.cartItems);

      }
      else
      {
          alert("Product already exist in cart.")

      }

  }

  this.msg.updateCartCount(this.cartItems.length);

  this.msg.sendMsg(this.cartItems); //give refecne of localstorage

}


}
