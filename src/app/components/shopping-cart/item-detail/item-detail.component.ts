import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  inItems:Product;
  id:number;
  today: number = Date.now();
  constructor(private activeRoute:ActivatedRoute,private  itemServ:ProductService) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(
        (params:Params) =>{
            this.id=params.id;
           // alert("Paran" + this.id);
            this.inItems=this.itemServ.getItemsById(this.id);

        }

    );


  }

  onSubmitRate(form: NgForm) {
    const newrate = parseInt(form.value.rate, 10);
    this.itemServ.addRating(this.id, newrate);
    form.reset();
  }

  onSubmitReview(form: NgForm) {
    const newreview = form.value.review;
    this.itemServ.addReview(this.id, newreview);
    form.reset();
  }


}
