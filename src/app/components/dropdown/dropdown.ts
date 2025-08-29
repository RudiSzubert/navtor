import { Component, inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { vesselSelected } from '../../actions/selectVessel.actions';
import { Observable, take } from 'rxjs';
import { Vessel } from '../../interfaces/vessel';

@Component({
  selector: 'app-dropdown',
  imports: [
    AsyncPipe
  ],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
  providers: []
})
export class Dropdown implements OnInit {
  private store = inject(Store);
  public vessels$: Observable<Vessel[]> = this.store.pipe(select(state => state.matchedVessels));

  ngOnInit() {
    this.vessels$.pipe(take(1)).subscribe(vessels => {
      this.store.dispatch(vesselSelected({ vehicleId: vessels[0].id }))
    });
  }

  public change(e: any) {
    this.store.dispatch(vesselSelected({vehicleId: +e.target.value}))
  }
}
