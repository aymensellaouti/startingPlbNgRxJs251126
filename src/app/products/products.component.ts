import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./dto/product.dto";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  standalone: true,
  imports: [AsyncPipe],
})
export class ProductsComponent {
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  products$!: Observable<Product[]>;
  constructor() {}
}
