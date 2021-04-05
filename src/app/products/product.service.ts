import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {Product} from './product'
import {catchError,tap} from 'rxjs/operators';
@Injectable({
    providedIn:'root',
})
export class ProductService{
    private _productUrl='api/products/products.json';
    constructor(private http:HttpClient){}
    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this._productUrl).pipe(
            tap(data =>{data[0]['productName']="buss"; return data}),
            catchError(this.handleError))
    }
    private handleError(err: HttpErrorResponse){
        console.error(err);
        return throwError(err);
    }
}