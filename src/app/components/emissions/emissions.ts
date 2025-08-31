import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-emissions',
  imports: [
    ChartComponent
  ],
  templateUrl: './emissions.html',
  styleUrl: './emissions.scss'
})
export class Emissions {
  protected chartComponents: Array<string> = [uuidv4()]

  public addChart() {
    this.chartComponents.push(uuidv4());
  }
}
