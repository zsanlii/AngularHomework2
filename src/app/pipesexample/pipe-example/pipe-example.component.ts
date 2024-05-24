import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipeExampleComponent {
   dateVal: Date = new Date();
}
