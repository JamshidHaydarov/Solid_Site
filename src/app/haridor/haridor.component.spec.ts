import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaridorComponent } from './haridor.component';

describe('HaridorComponent', () => {
  let component: HaridorComponent;
  let fixture: ComponentFixture<HaridorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaridorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HaridorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
