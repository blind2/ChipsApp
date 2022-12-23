import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, NgForm} from "@angular/forms"

import { ListeChipsComponent } from './liste-chips.component';

describe('ListeChipsComponent', () => {
  let component: ListeChipsComponent;
  let fixture: ComponentFixture<ListeChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
