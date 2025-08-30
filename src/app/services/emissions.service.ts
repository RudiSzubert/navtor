import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmissionsResponse } from '../interfaces/emission';

@Injectable()
export class EmissionsService {
  private http = inject(HttpClient);

  public getEmissions() {
    return this.http.get<EmissionsResponse[]>('/emissions.json');
  }
}
