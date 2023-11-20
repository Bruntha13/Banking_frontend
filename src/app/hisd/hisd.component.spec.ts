import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisdComponent } from './hisd.component';

describe('HisdComponent', () => {
  let component: HisdComponent;
  let fixture: ComponentFixture<HisdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HisdComponent]
    });
    fixture = TestBed.createComponent(HisdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
