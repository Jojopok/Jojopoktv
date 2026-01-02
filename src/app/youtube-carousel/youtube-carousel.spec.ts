import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubeCarousel } from './youtube-carousel';

describe('YoutubeCarousel', () => {
  let component: YoutubeCarousel;
  let fixture: ComponentFixture<YoutubeCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
