import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueGlucideMaxComponent } from './statistique-glucide-max.component';

describe('StatistiqueGlucideMaxComponent', () => {
  let component: StatistiqueGlucideMaxComponent;
  let fixture: ComponentFixture<StatistiqueGlucideMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueGlucideMaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueGlucideMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
