import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegigterComponent } from './regigter.component';

describe('RegigterComponent', () => {
  let component: RegigterComponent;
  let fixture: ComponentFixture<RegigterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegigterComponent]
    });
    fixture = TestBed.createComponent(RegigterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
