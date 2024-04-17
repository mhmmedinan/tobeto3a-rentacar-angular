import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrandFormComponent } from './add-brand-form.component';

describe('AddBrandFormComponent', () => {
  let component: AddBrandFormComponent;
  let fixture: ComponentFixture<AddBrandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBrandFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBrandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
