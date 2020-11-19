import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AdminsService } from '../services/admins.service';

import { AdmistratorComponent } from './admistrator.component';

describe('AdmistratorComponent', () => {
  let component: AdmistratorComponent;
  let fixture: ComponentFixture<AdmistratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmistratorComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [AdminsService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmistratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ADMIN1-should create', () => {
    expect(component).toBeTruthy();
  });

  it(`ADMIN2-should have as title 'Main-App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('DOTNET-FrontEnd');
  });


});
