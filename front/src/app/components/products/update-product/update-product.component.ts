import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorComponent],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

  public id?:number;
  public name:string="";
  public price:number=0;
  public isError = false;
  public errorText="";

  constructor (private route:ActivatedRoute, private router:Router, private productsService:ProductsService){

    this.productsService.getProduct(this.route.snapshot.params['id']).subscribe({
      next:(product)=>{
        this.name=product.name;
        this.price=product.price;
        this.id=product.id;
      },
      error:(error)=>{
        console.log(error.error.text);
        this.isError=true;
        this.errorText=error.error.text
      }
    })

  }

    public productSubmit(form:NgForm){
    this.productsService.updateProduct({id:this.id, ...form.form.value}).subscribe({
      next:(data)=>{
        this.router.navigate(['products', 'list']);
      },
      error:(error)=>{
        this.isError=true;
        this.errorText=error.error.text;
      }
    })

  }

}

