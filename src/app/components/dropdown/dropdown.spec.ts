import { ComponentFixture, TestBed } from '@angular/core/testing';
import { data as matchedVessels } from '../../../app/mocks/matchedVessels.json'

import { Dropdown } from './dropdown';
import { provideZonelessChangeDetection } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { vesselSelected } from '../../actions/selectVessel.actions';

fdescribe('Dropdown', () => {
  let component: Dropdown;
  let fixture: ComponentFixture<Dropdown>;
  let mockStore: MockStore;
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
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action with id', () => {
    spyOn(mockStore, 'dispatch');
    component.change({ target: { value: 2137 }})

    expect(mockStore.dispatch).toHaveBeenCalledWith(vesselSelected({ vesselId: 2137 }));
  });
});
