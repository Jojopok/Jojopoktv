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
        embedUrl: this.sanitize('https://www.youtube.com/embed/aNIJ6wy3c64'),
        title: 'Live Multi-Gaming 🎮'
      },
      {
        embedUrl: this.sanitize('https://www.youtube.com/embed/aNIJ6wy3c64'),
        title: 'Soirée horreur 😱'
      },
      {
        embedUrl: this.sanitize('https://www.youtube.com/embed/aNIJ6wy3c64'),
        title: 'Découverte indé 🔥'
      },
      {
        embedUrl: this.sanitize('https://www.youtube.com/embed/aNIJ6wy3c64'),
        title: 'Best of commu 😂'
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