import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VesselsComponent } from './vessels';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';


describe('Vessels', () => {
  let component: VesselsComponent;
  let fixture: ComponentFixture<VesselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselsComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideMockStore({})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
