import { Component, inject } from "@angular/core";
import { BehaviorSubject, concatMap, map, Observable, skip, tap, scan, takeWhile } from "rxjs";
import { Product } from "./dto/product.dto";
import { AsyncPipe } from "@angular/common";
import { Settings } from "./dto/product-settings.dto";
import { ProductService } from "./services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [AsyncPipe],
})
export class ProductsComponent {
  setting: Settings = {
    limit: 12,
    skip: 0,
  };
  noMoreProducts = false;
  productService = inject(ProductService);
  settings$ = new BehaviorSubject<Settings>(this.setting);

  products$: Observable<Product[]> = this.settings$.pipe(

    concatMap((setting) => this.productService.getProducts(setting)),
    //reponse = appelHttp(setting1), reponse = appelHttp(setting2),
    tap((response) => console.log(response)),
    //productsActuel
    map((productResponse) => productResponse.products),
    //[concatene avece ce que j'ai]
    takeWhile(products => {
      if (products.length < 12) {
        this.noMoreProducts = true;
        return false;
      }
      return true;
    }),
    scan((oldProducts, newProducts) => ([...oldProducts, ...newProducts])),
    tap((response) => console.log({response})),
  );

  moreProducts() {
    this.setting = {
      limit: 12,
      skip: this.setting.limit + this.setting.skip,
    };
    this.settings$.next(this.setting);
  }
}
