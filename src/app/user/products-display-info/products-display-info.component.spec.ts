import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDisplayInfoComponent } from './products-display-info.component';

describe('ProductsDisplayInfoComponent', () => {
  let component: ProductsDisplayInfoComponent;
  let fixture: ComponentFixture<ProductsDisplayInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDisplayInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDisplayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
