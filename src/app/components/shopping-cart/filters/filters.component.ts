import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  strFilter:string="100";
  @Output()
  FilterProduct: EventEmitter<string>=new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  FilterProductHandler(){
    alert("FilterProductHandler" + this.strFilter);

    this.FilterProduct.emit(this.strFilter);

  }

}
