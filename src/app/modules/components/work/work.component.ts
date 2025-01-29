import { Component } from '@angular/core';
import { InprogressComponent } from '../inprogress/inprogress.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [InprogressComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

}
