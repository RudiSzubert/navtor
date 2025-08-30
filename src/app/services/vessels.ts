import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vessel } from '../interfaces/vessel';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VesselsService {
  private http = inject(HttpClient);

  public getVessels(): Observable<Vessel[]> {
    return this.http.get<Vessel[]>('/vessels.json');
  }
}
