import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  title: string = 'Product List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  showImage: boolean = true;
  private _filterBy!: string;
  private _productService!: ProductService;
  errorMessage!: string;
  subscription!: Subscription;
  constructor(productService: ProductService) {
    this._productService = productService;
  }
  get filterBy(): string {
    return this._filterBy;
  }
  set filterBy(value: string) {
    this._filterBy = value;
    this.filterProducts = this.performFilter(value);
  }
  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    let temp: Product[] = this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
    return temp;
  }
  filterProducts: Product[] = [];
  products!: Product[];
  handleRatingClick(value: string): void {
    console.log(value, 'click ss');
  }
  ngOnInit(): void {
   this.subscription=this._productService.getProducts().subscribe({
      next: (products) => {
        console.log(products, 'ss');
        this.products =   products;
        this.filterBy = '';
      },
      error: (err) => {
        console.log(err, 'eror');
        this.errorMessage = err;
      },
    });
    console.log('inital');
  }
  toggleImage(e: Event): void {
    console.log(e);
    this.showImage = !this.showImage;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
