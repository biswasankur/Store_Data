import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommersComponent } from './e-commers.component';

describe('ECommersComponent', () => {
  let component: ECommersComponent;
  let fixture: ComponentFixture<ECommersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommersComponent]
    });
    fixture = TestBed.createComponent(ECommersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
