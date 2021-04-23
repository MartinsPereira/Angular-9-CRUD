import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private rounter: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct() {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto Deletado com sucesso!!')
      this.rounter.navigate(["/products"])
    })
  }

  cancel() {
    this.rounter.navigate(["/products"])
  }

}
