import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ProductService} from 'src/app/services/product.service'

@Component({
  selector: 'app-item-images-single',
  templateUrl: './item-images-single.component.html',
  styleUrls: ['./item-images-single.component.css']
})
export class ItemImagesSingleComponent implements OnInit {

  @Input() imgUrl: string;
  @Input() index: number;

  @Output() urlEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private itemServ:ProductService) { }

  ngOnInit(): void {
  }


  onHoverImage() {

    this.urlEvent.next(this.imgUrl);
  }

  onLeaveImage() {
   // alert(this.index);
    this.urlEvent.next(this.itemServ.getItemsById(this.index).imageUrl);
  }

}
