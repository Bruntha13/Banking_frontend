import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiswComponent } from './hisw.component';

describe('HiswComponent', () => {
  let component: HiswComponent;
  let fixture: ComponentFixture<HiswComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiswComponent]
    });
    fixture = TestBed.createComponent(HiswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
