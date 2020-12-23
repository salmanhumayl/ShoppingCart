import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {MessengerService} from 'src/app/services/messenger.service'
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  allTotal=0;
  lEmptyCard:boolean=false;

  constructor(private _itemService:ProductService,
    private msg:MessengerService) { }
 // product:Product[];
  productAddedTocart:Product[];
  ngOnInit(): void {

    this.productAddedTocart=this._itemService.getProductFromCart();
    if (this.productAddedTocart!=null)
    {
    if (this.productAddedTocart.length > 0)
    {

      this.lEmptyCard=true;
      this.calculteAllTotal(this.productAddedTocart);
    }
  }

  }
  calculteAllTotal(product:Product[]){
      let total=0;
      for (let i in product)
      {

        total=total+ (product[i].qty * product[i].price)
      }
      return this.allTotal=total;
  }


  onAddQuantity(product:Product)
  {

    this.productAddedTocart=this._itemService.getProductFromCart();
    this.productAddedTocart.find(p=>p.id==product.id).qty = product.qty+1;
    this._itemService.removeAllProductFromCart();
    this._itemService.AddProductToCard(this.productAddedTocart);
    this.productAddedTocart=this._itemService.getProductFromCart();
    this.calculteAllTotal(this.productAddedTocart);
    this.msg.sendMsg(this.productAddedTocart); //give refecne of localstorage


}
onRemoveQuantity(product:Product)
{

  this.productAddedTocart=this._itemService.getProductFromCart();
  this.productAddedTocart.find(p=>p.id==product.id).qty = product.qty-1;
  this._itemService.removeAllProductFromCart();
  this._itemService.AddProductToCard(this.productAddedTocart);
  this.calculteAllTotal(this.productAddedTocart);

}



CalculateSubTotal(product:Product): Number {
  let subTotal = 0;

  subTotal =product.qty * product.price;
  return subTotal;
}
}
