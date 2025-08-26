import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  imports: [],
  templateUrl: './tourCard.component.html',
  styleUrl: './tourCard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TourCardComponent { }
