import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emissions } from './emissions';

describe('Emissions', () => {
  let component: Emissions;
  let fixture: ComponentFixture<Emissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emissions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emissions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
