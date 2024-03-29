import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelListGroupComponent } from './model-list-group.component';

describe('ModelListGroupComponent', () => {
  let component: ModelListGroupComponent;
  let fixture: ComponentFixture<ModelListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelListGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
