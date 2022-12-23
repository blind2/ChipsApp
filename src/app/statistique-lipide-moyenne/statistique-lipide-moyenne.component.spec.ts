import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueLipideMoyenneComponent } from './statistique-lipide-moyenne.component';

describe('StatistiqueLipideMoyenneComponent', () => {
  let component: StatistiqueLipideMoyenneComponent;
  let fixture: ComponentFixture<StatistiqueLipideMoyenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueLipideMoyenneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueLipideMoyenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
