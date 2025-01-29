import { Component } from '@angular/core';
import { InprogressComponent } from '../inprogress/inprogress.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [InprogressComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

}
