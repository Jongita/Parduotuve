import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../../../models/order';
import { OrdersService } from '../../../services/orders.service';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-list-orders',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.css'
})
export class ListOrdersComponent {
  public orders:Order[]=[];
  // public products:Product[]=[];

  private loadRecords(){
    this.ordersService.getOrders().subscribe({
      next:(result)=>{
        this.orders=result;
      }
    });
  }

  constructor(private ordersService:OrdersService, private productsService:ProductsService){
  this.loadRecords();

// Nebutinas antras kreipimasis i serveri, viska gausime su viena uzklausa
  // productsService.getProducts().subscribe({
  //     next:(products)=>{
  //       this.products=products;
  //     }
  //   })

}

// public getProductName(id:number){
//     let result="";
//     this.products.forEach((product)=>{ 
//       if (product.id==id) 
//         result= product.name;
//     });
//     return result;
//   }

//   public getProductPrice(id:number){
//     let result=null;
//     this.products.forEach((product)=>{ 
//       if (product.id==id) 
//         result= product.price;
//     });
//     return result;
//   }

  public deleteOrder(id?:number){
    if(id!=null){
      this.ordersService.deleteOrder(id).subscribe({
      next:(result)=>{
        this.loadRecords();
      }
    })
    }
  }

}