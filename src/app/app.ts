import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { TwitchPlayer } from "./twitch-player/twitch-player";
import { Presentation } from "./presentation/presentation";
import { YoutubeCarouselComponent } from "./youtube-carousel/youtube-carousel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, TwitchPlayer, Presentation, YoutubeCarouselComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jojopoktv');
}
