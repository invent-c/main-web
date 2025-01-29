import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { AboutComponent } from './components/about/about.component';
import { BookComponent } from './components/book/book.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ClientsComponent } from './components/clients/clients.component';

const components = [ HomeComponent, IntroductionComponent, BenefitsComponent ]
@NgModule({
  declarations: [...components, AboutComponent, BookComponent, YoutubeComponent, ReviewsComponent, GalleryComponent, ClientsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
