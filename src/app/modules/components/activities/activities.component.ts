import { Component } from '@angular/core';
import { InprogressComponent } from '../inprogress/inprogress.component';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [InprogressComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {

}
