import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-test-rx-js',
  styleUrls: ['./test-rx-js.css'],
  templateUrl: './test-rx-js.html',
})
export class TestRxJs {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
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
    // C'est une première inscription
    this.myObservable$
      // 5 4 3 2 1
      .subscribe({
        next: (val) => {
          console.log(val);
        },
      });

    setTimeout(() => {
      // C'est une deuxième inscription
      this.myObservable$
        // 5 4 3 2 1
        .subscribe({
          next: (val) => {
            this.toastr.info('' + val);
          },
          complete: () => {
            this.toastr.error('BOOOOOOM !!!!!');
          },
        });
    }, 3000)
  }
}
