import { Component, Input } from "@angular/core";
import { Observable, map, startWith, tap, timer } from "rxjs";

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
})
export class SliderComponent {
  @Input() timer = 1500;
  imageApiLink = "https://jsonplaceholder.typicode.com/photos";
  @Input() imagePaths = [
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  /* Todo : Créer le flux permettant de générer les images à afficher dans le slider */
  // 0 1 2 3 4 5 6 ....
  // as.jpg cv.png rotating_card_profile.png rotating_card_profile2.png rotating_card_profile3.png  as.jpg cv.png rotating_card_profile.png rotating_card_profile2.png rotating_card_profile3.png
  paths$: Observable<string> = timer(0,this.timer).pipe(
  // 0 1 2 3 4 5 6 7 8 9
  //  tap(index => console.log({index})),
    map(index => this.imagePaths[index % this.imagePaths.length]),
  //  tap(path => console.log({path})),
  )

}
