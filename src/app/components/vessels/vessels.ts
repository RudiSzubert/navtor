import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AgGridAngular } from 'ag-grid-angular';
import { AsyncPipe } from '@angular/common';
import { colDefs } from '../../configs/grid.config';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Vessel } from '../../interfaces/vessel';

@Component({
  selector: 'app-vessels',
  imports: [AgGridAngular, AsyncPipe],
  templateUrl: './vessels.html',
  styleUrl: './vessels.scss'
})
export class VesselsComponent {
  protected vessels$: Observable<Vessel[]> = inject(Store).pipe(select(state => state.vessels));
  protected colDefs: ColDef[] = colDefs;
}
