import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
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
  @Output() vesselId: EventEmitter<number> = new EventEmitter();
  private store = inject(Store);
  protected vessels$: Observable<Vessel[]> = this.store.pipe(select(state => state.matchedVessels));

  ngOnInit(): void {
    this.vessels$.pipe(take(1)).subscribe(vessels => {
      if (vessels?.length) {
        this.vesselId.emit(vessels[0].id);
      }
    });
  }

  public change(e: any): void {
    this.vesselId.emit(+e.target.value);
  }
}
