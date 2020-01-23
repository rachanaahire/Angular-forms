import { TestBed } from '@angular/core/testing';

import { ServiceformService } from './serviceform.service';

describe('ServiceformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceformService = TestBed.get(ServiceformService);
    expect(service).toBeTruthy();
  });
});
