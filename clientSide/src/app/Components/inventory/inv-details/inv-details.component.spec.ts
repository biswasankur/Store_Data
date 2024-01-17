import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDetailsComponent } from './inv-details.component';

describe('InvDetailsComponent', () => {
  let component: InvDetailsComponent;
  let fixture: ComponentFixture<InvDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvDetailsComponent]
    });
    fixture = TestBed.createComponent(InvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
