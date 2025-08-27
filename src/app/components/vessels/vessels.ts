import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-vessels',
  imports: [],
  templateUrl: './vessels.html',
  styleUrl: './vessels.scss'
})
export class VesselsComponent {
  private store = inject(Store);
}
