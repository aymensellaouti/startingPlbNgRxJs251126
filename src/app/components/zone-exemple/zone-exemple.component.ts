import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-zone-exemple',
  styleUrl: './zone-exemple.component.css',
  templateUrl: './zone-exemple.component.html',
  // changeDetection: ChangeDetectionStrategy.Eager
})
export class ZoneExempleComponent {
  x = signal(5);
  y = signal(7);
  names = signal(['Aurélien']);
  namesLength = computed(() => {
    return this.names().length;
  });
  addAymen() {
    this.names.update((names) => [...names, 'aymen'])
  }
  z = computed(() => this.x() + this.y());
  zz = computed(() => {
    console.log('Je calcule zz');
    return this.z() * 2
  });
  alertEffect = effect(() => {
    if (this.zz() > 80) alert('Troooooop')
  })
  //   console.log('Je calcule la somme');
  //   return (this.x()+this.y());
  // }

  constructor() {
    // setInterval(() => {
    //   this.addAymen()
    // }, 3000)
  }
}
