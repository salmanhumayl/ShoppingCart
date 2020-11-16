import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-item-images',
  templateUrl: './item-images.component.html',
  styleUrls: ['./item-images.component.css']
})
export class ItemImagesComponent implements OnInit {

  @Input() items1: Product;

  constructor() { }

  ngOnInit(): void {
  }


  urlChange(newUrl: string) {
   // alert(newUrl);
    this.items1.imageUrl = newUrl;
  }
}
