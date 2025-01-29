import { Component } from '@angular/core';
import { InprogressComponent } from '../inprogress/inprogress.component';

@Component({
  selector: 'app-tool',
  standalone: true,
  imports: [InprogressComponent],
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.scss'
})
export class ToolComponent {

}
