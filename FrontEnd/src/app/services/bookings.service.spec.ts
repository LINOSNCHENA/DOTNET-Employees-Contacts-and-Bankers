import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { AdminsService } from './admins.service';

import { BookingsService } from './bookings.service';

describe('BookingsService', () => {
  let service: BookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BookingsService]
    });
    service = TestBed.inject(BookingsService);
  });

  it('BOOK1-should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`BOOK2-should have as title 'Main-App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('DOTNET-FrontEnd');
  });
});
