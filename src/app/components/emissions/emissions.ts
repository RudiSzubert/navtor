import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { values } from '../../store/emissions.store';

@Component({
  selector: 'app-emissions',
  imports: [],
  templateUrl: './emissions.html',
  styleUrl: './emissions.scss'
})
export class EmissionsComponent implements OnInit {
  private store = inject(Store);

  ngOnInit() {
    this.store.select(values.emissions).subscribe((state) => {
      console.log(state);
    });
  }



}
