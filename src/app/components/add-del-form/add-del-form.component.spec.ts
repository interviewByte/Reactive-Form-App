import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelFormComponent } from './add-del-form.component';

describe('AddDelFormComponent', () => {
  let component: AddDelFormComponent;
  let fixture: ComponentFixture<AddDelFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDelFormComponent]
    });
    fixture = TestBed.createComponent(AddDelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
