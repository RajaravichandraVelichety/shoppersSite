import { TestBed, inject } from '@angular/core/testing';

import { FlipkartDataService } from './flipkart-data.service';

describe('FlipkartDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlipkartDataService]
    });
  });

  it('should be created', inject([FlipkartDataService], (service: FlipkartDataService) => {
    expect(service).toBeTruthy();
  }));
});
