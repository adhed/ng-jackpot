import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesServiceMock } from '@app/mocks/games.service.mock';
import { GamesService } from '@app/services';

import { GamesListComponent } from './games-list.component';

describe('GamesListComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesListComponent ],
      providers: [{ provide: GamesService, useClass: GamesServiceMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
