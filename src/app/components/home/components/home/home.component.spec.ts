import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesServiceMock } from '@app/mocks/games.service.mock';
import { JackpotServiceMock } from '@app/mocks/jackpot.service.mock';
import { GamesService, JackpotService } from '@app/services';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: GamesService, useClass: GamesServiceMock },
        { provide: JackpotService, useClass: JackpotServiceMock }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
