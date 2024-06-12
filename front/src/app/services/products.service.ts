import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  // http://localhost:4999/products/
  constructor(private http:HttpClient) { }

  public getProducts() {
    return this.http.get<Product[]>('http://localhost:4999/products/');
  }

  public getProduct(id:number) {
    return this.http.get<Product>('http://localhost:4999/products/'+id);
  }

  public addProduct(product:Product){
    return this.http.post('http://localhost:4999/products/', product );
  }

  public updateProduct(product:Product){
    return this.http.put('http://localhost:4999/products/', product);
  }

  public deleteProduct(id:number){
    return this.http.delete('http://localhost:4999/products/'+id);
  }
}
