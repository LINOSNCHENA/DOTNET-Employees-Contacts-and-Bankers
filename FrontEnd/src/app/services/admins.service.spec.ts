import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AdmistratorComponent } from '../admistrator/admistrator.component';
import { AppComponent } from '../app.component';
import { AdminsService } from './admins.service';

describe('AdminsService', () => {
  let service: AdminsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmistratorComponent],
      imports: [HttpClientModule],
      providers: [AdminsService]
    });
    service = TestBed.inject(AdminsService);
  });

  it('SERVICE1-should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`SERVICE2-should have as title 'Main-App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('DOTNET-FrontEnd');
  });

});
