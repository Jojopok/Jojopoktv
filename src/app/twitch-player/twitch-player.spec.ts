import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchPlayer } from './twitch-player';

describe('TwitchPlayer', () => {
  let component: TwitchPlayer;
  let fixture: ComponentFixture<TwitchPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitchPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchPlayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
