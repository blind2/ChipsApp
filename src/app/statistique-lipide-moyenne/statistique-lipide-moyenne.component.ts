import { Component } from '@angular/core';
import { ChipsService } from '../chips.service';
import { StatistiqueLipideMoyenne } from '../statistique-lipide-moyenne';

@Component({
  selector: 'app-statistique-lipide-moyenne',
  templateUrl: './statistique-lipide-moyenne.component.html',
  styleUrls: ['./statistique-lipide-moyenne.component.css']
})
export class StatistiqueLipideMoyenneComponent {

  statistiques: StatistiqueLipideMoyenne[] = [];
  displayedColumn = ["marque", "lipidesMoyenne"];

  constructor(private chipsService: ChipsService) { }

  ngOnInit(): void {
    this.getLipidesMoyenne();
    console.log(this.statistiques);
  }

  getLipidesMoyenne(): void{
    this.chipsService.getLipidesParMarque()
    .subscribe(resultat =>this.statistiques = resultat)
  }
}
