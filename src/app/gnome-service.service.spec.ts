import { TestBed } from '@angular/core/testing';

import { GnomeServiceService } from './gnome-service.service';

describe('GnomeServiceService', () => {
  let service: GnomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GnomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
