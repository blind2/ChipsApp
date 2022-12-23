import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierChipsFormComponent } from './modifier-chips-form.component';

describe('AjoutChipsFormComponent', () => {
  let component: ModifierChipsFormComponent;
  let fixture: ComponentFixture<ModifierChipsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierChipsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierChipsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
