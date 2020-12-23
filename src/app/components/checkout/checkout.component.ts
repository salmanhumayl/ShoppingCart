import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import { ProductService } from 'src/app/services/product.service';
import {MessengerService} from 'src/app/services/messenger.service'
import {Product} from 'src/app/models/product';
import { UserInfo } from 'src/app/models/UserInfo';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  currentUser: UserInfo;
  productAddedTocart:Product[];
  allTotal=0;

  constructor(public authService: AuthenticationService,
    private _itemService:ProductService,
    private msg:MessengerService,
    private router:Router) { }

  ngOnInit(): void {

    this.productAddedTocart=this._itemService.getProductFromCart();
    this.calculteAllTotal(this.productAddedTocart);



    this.GetLoggedinUserDetails();


  }

  calculteAllTotal(product:Product[]){
    let total=0;
    for (let i in product)
    {

      total=total+ (product[i].qty * product[i].price)
    }
    return this.allTotal=total;
}


  GetLoggedinUserDetails()
  {
    this.currentUser=this.authService.getRole();

  }

  ConfirmOrder(){

    alert("Order has been placed succesfully.");
   this._itemService.removeAllProductFromCart();

    window.location.href="http://portal.ajes.ae/caroil";
  }

}
