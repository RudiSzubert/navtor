import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { paths } from '../../configs/paths';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  protected paths = paths;
}
