import { Component } from '@angular/core';
import { InprogressComponent } from '../inprogress/inprogress.component';

@Component({
  selector: 'app-services-offered',
  standalone: true,
  imports: [InprogressComponent],
  templateUrl: './services-offered.component.html',
  styleUrl: './services-offered.component.scss'
})
export class ServicesOfferedComponent {

}
