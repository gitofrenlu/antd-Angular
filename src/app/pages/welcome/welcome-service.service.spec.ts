/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WelcomeServiceService } from './welcome-service.service';

describe('Service: WelcomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WelcomeServiceService]
    });
  });

  it('should ...', inject([WelcomeServiceService], (service: WelcomeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
