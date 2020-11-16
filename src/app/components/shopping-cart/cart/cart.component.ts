import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'
import {Product} from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //cartItems=[
  /*   {id:1,productId:1,productName:'Text1',qty:4,price:100},
    {id:2,productId:3,productName:'Text2',qty:5,price:50},
    {id:3,productId:2,productName:'Text3',qty:3,price:75},
    {id:4,productId:4,productName:'Text4',qty:2,price:80}, */
  //];

  cartItems:Product[]=[];

  cartTotal=0;
  constructor(private msg:MessengerService,private _itemService :ProductService) { }

  ngOnInit(): void {

    //alert("Cart component called");
     this.msg.getMsg().subscribe((product:Product)=>{
      this.addProductToCart(product);
      this.msg.updateCartCount(this.cartItems.length);


    })

  }


  addProductToCart(product:Product){
    let ProductExit=false;
    this.cartItems=this._itemService.getProductFromCart();

    if (this.cartItems==null)
    {
      this.cartItems=[];
      this.cartItems.push(product);
      this._itemService.AddProductToCard(this.cartItems);
    }
    else
    {
      let tempProduct=this.cartItems.find(p=>p.id==product.id)
        if (tempProduct==null)
        {
          this.cartItems.push(product);
          this._itemService.AddProductToCard(this.cartItems);

        }
        else
        {
            alert("Product already exist in cart.")

        }

    }

  }
}
/* addProductToCartWithout(product:Product){
  let productExists=false;

  for(let i in this.cartItems)
  {
    if (this.cartItems[i].productId==product.id)
      {
        this.cartItems[i].qty++;
        productExists=true;
      }
    }
    if (!productExists)
    {
      this.cartItems.push({
        productId:product.id,
        productName:product.name,
        qty:1,
        price:product.price
      })
    }
 */



  /* if (this.cartItems.length==0)
  {
    this.cartItems.push({
      productId:product.id,
      productName:product.name,
      qty:1,
      price:product.price
    })
  } else {
      for(let i in this.cartItems)
      {
        if (this.cartItems[i].productId==product.id)
          {
            this.cartItems[i].qty++;
            break;
          }
          else
          {
            this.cartItems.push({
              productId:product.id,
              productName:product.name,
              qty:1,
              price:product.price
            })
         }
      }
    }

 */

//      this.cartTotal=0;
  //    this.cartItems.forEach(item=>{
    //  this.cartTotal+=(item.qty * item.price)
   // })
 // }
//}

