import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

  constructor(private productService:ProductsService, private router:Router){

  }

  public productSubmit(form:NgForm){
    console.log(form.form.value);
    this.productService.addProduct(form.form.value).subscribe((data)=>{
      this.router.navigate(['products', 'list']);
    })
    
  }
}
