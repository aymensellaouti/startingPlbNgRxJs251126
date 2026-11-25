import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerExamplesComponent } from './timer-examples.component';

describe('TimerExamplesComponent', () => {
  let component: TimerExamplesComponent;
  let fixture: ComponentFixture<TimerExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TimerExamplesComponent]
});
    fixture = TestBed.createComponent(TimerExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
