import { HttpClient } from "@angular/common/http";
import { Component, inject, Input, ChangeDetectionStrategy } from "@angular/core";
import { Observable, combineLatest, map, startWith, tap, timer } from "rxjs";
import { NgStyle, AsyncPipe } from "@angular/common";

export interface ImageAPi {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgStyle, AsyncPipe]
})
export class SliderComponent {
  @Input() timer = 1500;
  httpClient = inject(HttpClient);
  imageApiLink = 'https://jsonplaceholder.typicode.com/photos';
  @Input() imagePaths = [
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  // Appel HTtp
  images$ = this.httpClient.get<ImageAPi[]>(this.imageApiLink);
  /* Todo : Créer le flux permettant de générer les images à afficher dans le slider */
  // 0 1 2 3 4 5 6 ....
  // as.jpg cv.png rotating_card_profile.png rotating_card_profile2.png rotating_card_profile3.png  as.jpg cv.png rotating_card_profile.png rotating_card_profile2.png rotating_card_profile3.png
  path$ = combineLatest([this.images$, timer(0, this.timer)]).pipe(
    map(([images, index]) => images[index].url),
    tap(path => console.log(path))
  );
  // paths$: Observable<string> = timer(0, this.timer).pipe(
  //   // 0 1 2 3 4 5 6 7 8 9
  //   //  tap(index => console.log({index})),
  //   map((index) => this.imagePaths[index % this.imagePaths.length]),
  //   //  tap(path => console.log({path})),
  // );
  constructor() {
    // this.httpClient.get(this.imageApiLink).subscribe({
    //   next: (images) => console.log(images),
    // });
  }
}
