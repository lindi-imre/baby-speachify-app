import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-play-page',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './play-page.component.html',
  styleUrl: './play-page.component.scss'
})
export class PlayPageComponent implements OnInit {
  constructor(private socketService: SocketService) {

  }
  ngOnInit(): void {
    this.socketService.onCommandReceived((command: string) => {
      console.log(command);
      if(command === 'play') {
        this.playSound();
      }
      else if(command === 'next') {
        this.nextImage();
      }
    });
  }
  images: string[] = [
    'assets/images/cow.jpg',
    'assets/images/tiger.jpg',
    'assets/images/sheep.jpg',
    'assets/images/monkey.jpg',
    'assets/images/flamingo.jpg',
    // Add more images here
  ];

  sounds = [
  'assets/sounds/cow.mp3',
  'assets/sounds/tiger-sound.mp3',
  'assets/sounds/sheep.mp3',
  'assets/sounds/monkey.mp3',
  // add more sounds
  'assets/sounds/flamingo.mp3',
];

audio = new Audio();

  currentIndex = 0;
  transitioning = false;

  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.playSound();
      event.preventDefault(); // Prevent scroll
    } else if (event.code === 'ArrowRight') {
      this.nextImage();
    }
  }

  playSound() {
  this.audio.pause();           // Stop any playing audio
  this.audio.src = '';
  this.audio.src = this.sounds[this.currentIndex];
  this.audio.load();
  this.audio.play();
}

  nextImage() {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex === this.images.length) {
      this.currentIndex = 0;
    }
  // this.playSound();   // Optionally play new sound on image change
}

  get currentImage() {
    return this.images[this.currentIndex];
  }
}
