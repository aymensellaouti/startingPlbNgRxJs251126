import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { TestRxJs } from './rxjs/test-rx-js/test-rx-js';
import { ZoneExempleComponent } from './components/zone-exemple/zone-exemple.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NavbarComponent, RouterOutlet, TestRxJs, ZoneExempleComponent]
})
export class AppComponent {
  title = 'Starting Advanced Topics';
}
