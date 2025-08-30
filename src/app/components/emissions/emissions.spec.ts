import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmissionsComponent } from './emissions';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';


describe('EmissionsComponent', () => {
  let component: EmissionsComponent;
  let fixture: ComponentFixture<EmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionsComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideMockStore({})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
