import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
    selector: 'app-of-from',
    templateUrl: './of-from.component.html',
    styleUrls: ['./of-from.component.css']
})
export class OfFromComponent {
  names = ['aurélien','aymen'];

  namesOf$ = of(this.names, 'cc').subscribe({
    next: (val) => {console.log('flux de of :', val);}
  });
  namesFrom$ = from(this.names).subscribe({
    next: (val) => {console.log('flux de from :', val);}
  });
}
