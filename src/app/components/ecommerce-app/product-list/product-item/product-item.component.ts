import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../model/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product!: Products

  constructor() { }

  ngOnInit(): void {
  }

}
