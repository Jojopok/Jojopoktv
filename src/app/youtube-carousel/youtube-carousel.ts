import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-youtube-carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './youtube-carousel.html',
  styleUrls: ['./youtube-carousel.css'],
})
export class YoutubeCarouselComponent implements OnInit {

  videos!: { embedUrl: SafeResourceUrl; title: string }[];

  visibleCount = 3;
  startIndex = 0;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videos = [
      {
        embedUrl: this.sanitize('https://www.youtube.com/embed/a1ECl6PpQy4'),
        title: 'Je suis un pro 🎮'
      },
      {
        embedUrl: this.sanitize('https://www.youtube.com/embed/aCKH7ByKd5A'),
        title: 'La main verte 🌿'
      },
      {
        embedUrl: this.sanitize('https://www.youtube.com/embed/OliLtD5bOpk'),
        title: 'Metricool 📊'
      },
      {
        embedUrl: this.sanitize('https://www.youtube.com/embed/Oce9gB3VZw8'),
        title: 'Quand je suis devenu papa célibataire 👨‍👧'
      },
      {
        embedUrl: this.sanitize('https://www.youtube.com/embed/uyBf2qf-mqA'),
        title: "Le petit chien s’est lâché 🐕"
      }
    ];
      this.visibleCount = window.innerWidth < 600 ? 1 : 3;
    
  }

  get visibleVideos() {
    const end = this.startIndex + this.visibleCount;
    if (end <= this.videos.length) {
      return this.videos.slice(this.startIndex, end);
    }

    return [
      ...this.videos.slice(this.startIndex),
      ...this.videos.slice(0, end - this.videos.length)
    ];
  }

  private sanitize(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  next() {
    this.startIndex = (this.startIndex + 1) % this.videos.length;
  }

  prev() {
    this.startIndex =
      (this.startIndex - 1 + this.videos.length) % this.videos.length;
  }
}