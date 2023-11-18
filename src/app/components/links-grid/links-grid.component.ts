import { Component, Input } from '@angular/core';
import { UserLinks } from '../../models/user.model';

@Component({
  selector: 'app-links-grid',
  templateUrl: './links-grid.component.html',
  styleUrls: ['./links-grid.component.css'],
})
export class LinksGridComponent {
  @Input() userLinks!: UserLinks;
}
