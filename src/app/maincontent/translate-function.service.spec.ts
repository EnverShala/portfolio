import { TestBed } from '@angular/core/testing';

import { TranslateFunctionService } from './translate-function.service';

describe('TranslateFunctionService', () => {
  let service: TranslateFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
