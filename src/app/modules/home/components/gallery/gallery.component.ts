import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  carouselItems = [
    { imageSrc: 'assets/images/dashboard (1).jpg', alt: 'Carousel Image 1' },
    { imageSrc: 'assets/images/dashboard (2).jpg', alt: 'Carousel Image 2' },
    { imageSrc: 'assets/images/dashboard (3).jpg', alt: 'Carousel Image 3' },
    { imageSrc: 'assets/images/dashboard (4).jpg', alt: 'Carousel Image 4' },
    { imageSrc: 'assets/images/dashboard (5).jpg', alt: 'Carousel Image 5' },
    { imageSrc: 'assets/images/dashboard (6).jpg', alt: 'Carousel Image 6' },
    { imageSrc: 'assets/images/dashboard (7).jpg', alt: 'Carousel Image 7' },
    { imageSrc: 'assets/images/dashboard (8).jpg', alt: 'Carousel Image 8' },
    { imageSrc: 'assets/images/dashboard (9).jpg', alt: 'Carousel Image 9' },
    { imageSrc: 'assets/images/dashboard (10).jpg', alt: 'Carousel Image 10' },
    { imageSrc: 'assets/images/dashboard (11).jpg', alt: 'Carousel Image 11' },
    { imageSrc: 'assets/images/dashboard (12).jpg', alt: 'Carousel Image 12' },
    // Add more items as needed
  ];
}
