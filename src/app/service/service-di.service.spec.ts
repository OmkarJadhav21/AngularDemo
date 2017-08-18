import { TestBed, inject } from '@angular/core/testing';

import { ServiceDIService } from './service-di.service';

describe('ServiceDIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDIService]
    });
  });

  it('should be created', inject([ServiceDIService], (service: ServiceDIService) => {
    expect(service).toBeTruthy();
  }));
});
