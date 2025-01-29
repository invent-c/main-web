import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.scss'
})
export class YoutubeComponent {
  bookLink = 'https://www.igi-global.com/book/converting-ideas-innovation-lean-canvas/313179#:~:text=The%20Lean%20Canvas%20for%20Invention%20(LCI)%20is%20an%20academic%20tool,Canvas%20for%20Invention%20(LCI)%3F&text=This%20chapter%20explicitly%20discusses%20the,the%20Lean%20Canvas%20for%20Invention';
  openLink(link:string){
    window.open(link,'_blank')
  }
}
