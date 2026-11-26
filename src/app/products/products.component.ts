import { Component } from "@angular/core";
import { BehaviorSubject, Observable, skip } from "rxjs";
import { Product } from "./dto/product.dto";
import { AsyncPipe } from "@angular/common";
import { Settings } from "./dto/product-settings.dto";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [AsyncPipe],
})
export class ProductsComponent {
  setting: Settings = {
    limit: 0,
    skip: 12,
  };
  settings$ = new BehaviorSubject<Settings>(this.setting);
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  products$!: Observable<Product[]> = this.settings$
    .pipe
    //{0,12} {12,12}, {24,12},......

    //reponse = appelHttp(setting1), reponse = appelHttp(setting2),

    //productsActuel

    //[concatene avece ce que j'ai]
    ();
  constructor() {}
}
