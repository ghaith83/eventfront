import { TestBed } from '@angular/core/testing';

import { FooterGuard } from './footer.guard';

describe('FooterGuard', () => {
  let guard: FooterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FooterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
