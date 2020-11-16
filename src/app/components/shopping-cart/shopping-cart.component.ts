import { Component, OnInit,ViewChild } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service';
import { ProductListComponent } from '../../components/shopping-cart/product-list/product-list.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {


  cartFilter:string;

  @ViewChild(ProductListComponent) ProductListComponent:ProductListComponent;

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {


  }
  searchProduct(strFilter:string )
  {
    alert("Called ShoppingCard Searchproduct" )
    this.cartFilter=strFilter;

    this.ProductListComponent.ProductFiterProduct(this.cartFilter);



  }

}
