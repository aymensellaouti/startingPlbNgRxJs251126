import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
    selector: 'app-test-rx-js',
    styleUrls: ['./test-rx-js.css'],
    templateUrl: './test-rx-js.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [AsyncPipe]
})
export class TestRxJs {
  myObservable$: Observable<number>;
  startWith5Observable$: Observable<number>;
  multipleDe3$: Observable<number>;
  toastr = inject(ToastrService);
  count = 5;
  constructor() {
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.startWith5Observable$ = this.myObservable$.pipe(startWith(5));
    // C'est une première inscription
    this.myObservable$
      // 5 4 3 2 1
      .subscribe({
        next: (val) => {
          console.log(val);
        },
      });

    // setTimeout(() => {
    // C'est une deuxième inscription
    this.multipleDe3$ = this.myObservable$
      // 5 4 3 2 1
      .pipe(
        map((val) => val * 3),
        // 15 12 9 6 3
        filter((valMultiplie) => valMultiplie % 2 == 0),
        // 12 6
      );
    // .subscribe({
    //   next: (val) => {
    //     this.toastr.info('' + val);
    //   },
    //   complete: () => {
    //     this.toastr.error('BOOOOOOM !!!!!');
    //   },
    // });
    // }, 3000)
    // C'est une première inscription
    this.myObservable$
      // 5 4 3 2 1
      .subscribe({
        next: (val) => {
          this.count = val;
        },
      });
  }
}
