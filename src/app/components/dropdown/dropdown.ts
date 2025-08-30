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
  protected vessels$: Observable<Vessel[]> = this.store.pipe(select(state => state.matchedVessels));

  ngOnInit(): void {
    this.vessels$.pipe(take(1)).subscribe(vessels => {
      if (vessels?.length) {
        this.store.dispatch(vesselSelected({ vesselId: vessels[0].id }));
      }
    });
  }

  public change(e: any): void {
    this.store.dispatch(vesselSelected({vesselId: +e.target.value}));
  }
}
