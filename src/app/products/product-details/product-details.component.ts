import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle:string='PRoduct details';
  product!:Product;
  constructor(private route:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    const id:number = Number(this.route.snapshot.paramMap.get('id'));;
    this.product={
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 189.95980989,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    };
  }
  onBack(): void {
    this.router.navigate(['/products'])
  }

}
