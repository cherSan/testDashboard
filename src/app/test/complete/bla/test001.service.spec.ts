import { TestBed, inject } from '@angular/core/testing';

import { Test001Service } from './test001.service';

describe('Test001Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Test001Service]
    });
  });

  it('should ...', inject([Test001Service], (service: Test001Service) => {
    expect(service).toBeTruthy();
  }));
});
