import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List!';
    imageWidth = 50 ;
    imageMargin = 2;
    showImage = false ;

    constructor(private productService: ProductService ) {
    }
    private _listFilter;
  public get listFilter() {
    return this._listFilter;
  }
  public set listFilter(value) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            productId: 2,
            productName: 'Garden Cart',
            productCode: 'GDN-0023',
            releaseDate: 'March 18, 2019',
            description: '15 gallon capacity rolling garden cart',
            price: 32.99,
            starRating: 4.2,
            imageUrl: 'assets/images/garden_cart.png'
          },
          {
            productId: 5,
            productName: 'Hammer',
            productCode: 'TBX-0048',
            releaseDate: 'May 21, 2019',
            description: 'Curved claw steel hammer',
            price: 8.9,
            starRating: 4.8,
            imageUrl: 'assets/images/hammer.png'
          },
    ];

    performFilter(filterBy: string): IProduct[] {
      return this.products.filter((product: IProduct) =>
       product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1) ;
    }
    toggleImage(): void {
     this.showImage = !this.showImage;
    }

    OnRatingClicked(message: string ): void {
      this.pageTitle = 'Product List' + message;
    }
    ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
    }
}
