import { Component } from '@angular/core';
import { tap, timer } from 'rxjs';

@Component({
    selector: 'app-timer-examples',
    templateUrl: './timer-examples.component.html',
    styleUrls: ['./timer-examples.component.css']
})
export class TimerExamplesComponent {
  timerUnique$ = timer(2000).subscribe({
    next: (val) => {
      console.log('From timerUnique ' + val);
    },
    complete: () => {
      console.log('From timerUnique Complete');
    },
  });
  // From timerUnique 0 (apres 2s)
  // From timerUnique Complete

  timer$ = timer(0, 1500)
    // 0 1 2 3 4 5 6 7 8 9
    .pipe(tap((val) => console.log('From timerContinue ' + val)))
    // 0 1 2 3 4 5 6 7 8 9
    // .subscribe({
    //   next: (val) => {
    //     console.log('From timer ' + val);
    //   },
    //   complete: () => {
    //     console.log('From timer Complete');
    //   },
    // });
  // From timerUnique 0 (apres 1.5s) From timerUnique 1 (apres 3s) .....
}
