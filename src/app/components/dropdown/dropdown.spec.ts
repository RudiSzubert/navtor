import { ComponentFixture, TestBed } from '@angular/core/testing';
import { data as matchedVessels } from '../../../app/mocks/matchedVessels.json'

import { Dropdown } from './dropdown';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('Dropdown', () => {
  let component: Dropdown;
  let fixture: ComponentFixture<Dropdown>;
  const initialState = { matchedVessels: matchedVessels };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dropdown],
      providers: [
        provideZonelessChangeDetection(),
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit vesselId', () => {
    spyOn(component.vesselId, 'emit');
    component.change({ target: { value: 2137 }})

    expect(component.vesselId.emit).toHaveBeenCalledWith( 2137 );
  });
});
