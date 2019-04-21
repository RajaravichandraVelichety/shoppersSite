import { TestBed, inject } from '@angular/core/testing';

import { AmazonDataService } from './amazon-data.service';

describe('AmazonDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmazonDataService]
    });
  });

  it('should be created', inject([AmazonDataService], (service: AmazonDataService) => {
    expect(service).toBeTruthy();
  }));
});
