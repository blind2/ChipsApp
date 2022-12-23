import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerChipsFormComponent } from './supprimer-chips-form.component';

describe('SupprimerChipsFormComponent', () => {
  let component: SupprimerChipsFormComponent;
  let fixture: ComponentFixture<SupprimerChipsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerChipsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerChipsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
