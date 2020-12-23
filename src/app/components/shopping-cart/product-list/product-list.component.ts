import { Component, OnInit,Input } from '@angular/core';
import{ProductService} from 'src/app/services/product.service'
import{Product} from 'src/app/models/product';
import{MessengerService} from 'src/app/services/messenger.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  isLoggedIn:boolean;



  productlist:Product[]=[]; //blank array to start with

   constructor(private msg:MessengerService,private productService:ProductService) { }

  ngOnInit(): void {
   // alert("productlist");



    this.ShowProducts();

  }

   ShowProducts()
   {
    this.productlist=this.productService.getProducts();
   }

   ProductFiterProduct(strsearch:string)
  {

    this.productlist=this.productService.getFilterProducts();

  }



}
