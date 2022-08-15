import { Component, OnInit } from '@angular/core';
import { Products } from './model/products';
import { ProductService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  
  products: Array<Products> = []
  productService: ProductService

  constructor(productService: ProductService) {
    this.productService = productService
  }

  ngOnInit(): void {
    this.getProducts()
    
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(response => {
      this.products = response
    })
  }

}
