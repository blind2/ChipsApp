import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, NgForm} from "@angular/forms"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chips } from '../chips';
import { ChipsService } from '../chips.service';


@Component({
  selector: 'app-modifier-chips-form',
  templateUrl: './modifier-chips-form.component.html',
  styleUrls: ['./modifier-chips-form.component.css']
})
export class ModifierChipsFormComponent {

  chips : Chips | undefined

  constructor(
    public dialogRef: MatDialogRef<ModifierChipsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Chips,
    private chipsService: ChipsService
  ) {}

  ngOnInit(): void {
    this.chips = this.data;
  }

  onEdit(chipsFormEdition: NgForm): void {
    if (chipsFormEdition.valid && this.chips) {
      this.chipsService.updateChips(this.chips)
          .subscribe(() => this.chips = undefined);
          this.dialogRef.close();
    }
   }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
