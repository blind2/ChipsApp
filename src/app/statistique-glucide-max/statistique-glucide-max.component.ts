import { Component, OnInit } from '@angular/core';
import { ChipsService } from '../chips.service';
import { StatistiqueGlucideMax } from '../statistique-glucide-max';

@Component({
  selector: 'app-statistique-glucide-max',
  templateUrl: './statistique-glucide-max.component.html',
  styleUrls: ['./statistique-glucide-max.component.css']
})
export class StatistiqueGlucideMaxComponent {

  statistiqueGlucideMax: StatistiqueGlucideMax[] = [];
  displayedColumn = ["marque", "glucidesMax"];

  constructor(private chipsService: ChipsService) { }

  ngOnInit(): void {
    this.getMaximumGlucidesParMarque();
    console.log(this.statistiqueGlucideMax);
  }

  getMaximumGlucidesParMarque(): void{
    this.chipsService.getMaximumGlucideParMarque()
    .subscribe(resultat =>this.statistiqueGlucideMax = resultat)
  }
}
