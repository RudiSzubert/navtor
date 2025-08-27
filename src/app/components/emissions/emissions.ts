import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-emissions',
  imports: [],
  templateUrl: './emissions.html',
  styleUrl: './emissions.scss'
})
export class EmissionsComponent {
  private store = inject(Store);
}
