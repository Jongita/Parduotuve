import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OrdersService } from '../../../services/orders.service';
import { Product } from '../../../models/product';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-orders',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-orders.component.html',
  styleUrl: './new-orders.component.css'
})
export class NewOrdersComponent {

  public products:Product[]=[];

  public productId:number|null=null;
  public count:number|null=null;

  public orderProducts:{
    productId:number,
    count:number
  }[]=[];


  constructor (private ordersService:OrdersService, private productsService:ProductsService, private router:Router){
    productsService.getProducts().subscribe({
      next:(products)=>{
        this.products=products;
      }
    })
  }


  public orderSubmit(form:NgForm){
    this.ordersService.addOrder({...form.form.value, products:this.orderProducts}).subscribe({
      next:(result)=>{
        this.router.navigate(["/orders", "list"])
      }
    })
  }

  public addProductToOrder(){
    if (this.productId!=null && this.count!=null){
      this.orderProducts.push({
        productId:this.productId,
        count:this.count
      });
      console.log(this.orderProducts);
    }
  }
  
  // gauti produkto pavadinima:
  public getProductName(id:number){
    let result="";
    this.products.forEach((product)=>{ 
      if (product.id==id) 
        result= product.name;
    });
    return result;
  }
}

