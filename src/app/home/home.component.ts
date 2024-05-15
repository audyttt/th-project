import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('carousel') carousel: any;

  slides = [
    { image: 'https://via.placeholder.com/800x400?text=Slide+1', title: 'Slide 1', description: 'Description 1' },
    { image: 'https://via.placeholder.com/800x400?text=Slide+2', title: 'Slide 2', description: 'Description 2' },
    { image: 'https://via.placeholder.com/800x400?text=Slide+3', title: 'Slide 3', description: 'Description 3' }
  ];

  goToNextSlide() {
    if (this.carousel && this.carousel.nativeElement) {
      this.carousel.nativeElement.carousel('next');
    }
  }

  goToPrevSlide() {
    if (this.carousel && this.carousel.nativeElement) {
      this.carousel.nativeElement.carousel('prev');
    }
  }
}
