import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductFlipkartComponent } from './add-product-flipkart.component';

describe('AddProductFlipkartComponent', () => {
  let component: AddProductFlipkartComponent;
  let fixture: ComponentFixture<AddProductFlipkartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductFlipkartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductFlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
