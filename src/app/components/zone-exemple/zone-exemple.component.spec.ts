import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZoneExempleComponent } from './zone-exemple.component';

describe('ZoneExempleComponent', () => {
  let component: ZoneExempleComponent;
  let fixture: ComponentFixture<ZoneExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneExempleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ZoneExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
