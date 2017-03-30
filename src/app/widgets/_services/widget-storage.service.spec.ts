import { TestBed, inject } from '@angular/core/testing';

import { WidgetStorageService } from './widget-storage.service';

describe('WidgetStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetStorageService]
    });
  });

  it('should ...', inject([WidgetStorageService], (service: WidgetStorageService) => {
    expect(service).toBeTruthy();
  }));
});
