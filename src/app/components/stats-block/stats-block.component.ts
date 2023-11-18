import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-block',
  templateUrl: './stats-block.component.html',
  styleUrls: ['./stats-block.component.css'],
})
export class StatsBlockComponent {
  @Input() userStats: any;
}
