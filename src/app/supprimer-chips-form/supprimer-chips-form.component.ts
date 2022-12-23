import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Chips } from '../chips';
import { ChipsService } from '../chips.service';

@Component({
  selector: 'app-supprimer-chips-form',
  templateUrl: './supprimer-chips-form.component.html',
  styleUrls: ['./supprimer-chips-form.component.css']
})
export class SupprimerChipsFormComponent {

  chips : Chips = this.data;

  chipsTab: Chips[] = [];
  constructor(
    public dialogRef: MatDialogRef<SupprimerChipsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Chips,
    private chipsService: ChipsService
  ) {}
  

  onDelete(chips: Chips): void {
    if(chips._id) 
    {
	  this.chipsService.deleteChips(chips._id)
        .subscribe(result =>{
           this.chipsTab = this.chipsTab.filter(c => c !== chips);
          this.dialogRef.close();
        });   
    }
   }
}
