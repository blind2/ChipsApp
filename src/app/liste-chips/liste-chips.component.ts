import { Component, Inject, OnInit } from '@angular/core';
import { ChipsService } from '../chips.service'
import { Chips } from '../chips';
import { FormControl, NgForm } from "@angular/forms"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModifierChipsFormComponent } from '../modifier-chips-form/modifier-chips-form.component';
import { SupprimerChipsFormComponent } from '../supprimer-chips-form/supprimer-chips-form.component';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-liste-chips',
  templateUrl: './liste-chips.component.html',
  styleUrls: ['./liste-chips.component.css']
})
export class ListeChipsComponent {

  newChips: Chips = {
    nom: '',
    description: '',
    marque: '',
    lipides: 0,
    glucides: 0,
    proteines: 0,
    fibres: 0,
    sucres: 0,
    fer: 0,
    ingredients: [""]
  }

  selectedChips: Chips = {
    nom: '',
    description: '',
    marque: '',
    lipides: 0,
    glucides: 0,
    proteines: 0,
    fibres: 0,
    sucres: 0,
    fer: 0,
    ingredients: [""]
  }

  valeurRecherche: string = "";
  optionSelection: string = "";
  options: string[] = ["ID", "Nom", "Marque"];

  chips: Chips[] = [];
  displayedColumns = ['nom', 'marque', 'lipides', 'glucides', 'proteines', 'actions'];

  constructor(private chipsService: ChipsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getChips();
  }

  selectionerOption(option: string) {
    this.optionSelection = option;
  }


  openEditDialog(chips: Chips) {
    this.onSelect(chips);
    const dialogRef = this.dialog.open(ModifierChipsFormComponent, {
      data: this.selectedChips,
    });
    dialogRef.afterClosed().subscribe(_ => { this.getChips(); })
  }

  openDeleteDialog(chips: Chips, chipsTable: MatTable<Chips>) {
    this.onSelect(chips);
    let dialogRef = this.dialog.open(SupprimerChipsFormComponent, {
      data: this.selectedChips,
    });
    dialogRef.afterClosed().subscribe(_ => { this.getChips(); })
  }

  onSelect(chips: Chips): void {
    this.selectedChips = chips;
  }

  getChips(): void {
    this.chipsService.getChips()
      .subscribe(resultat => this.chips = resultat);
  }

  onAdd(chipsTable: MatTable<Chips>, chipsFormAjout: NgForm) {
    if (chipsFormAjout.valid) {
      this.chipsService.addChips(this.newChips)
        .subscribe(chips => { this.chips.push(chips); chipsFormAjout.resetForm(); chipsTable.renderRows(); });
    }
  }
  getCroustilleParNom(nom: string) {
    this.chipsService.getCroustilleParNom(nom)
      .subscribe(resultat => this.chips = resultat);
  }

  getCroustilleParID(id:string){
    this.chipsService.getCroustilleParID(id)
      .subscribe(resultat => this.chips = resultat);
  }

  getCroustilleParMarque(marque: string){
    this.chipsService.getCroustilleParMarque(marque)
      .subscribe(resultat => this.chips = resultat);
  }

  rechercher() {
    if (this.optionSelection === "ID") {
      this.getCroustilleParID(this.valeurRecherche)
    }
    else if (this.optionSelection === "Nom") {
      this.getCroustilleParNom(this.valeurRecherche);
    }
    else if( this.optionSelection === "Marque"){
      this.getCroustilleParMarque(this.valeurRecherche);
    }
  }
}
