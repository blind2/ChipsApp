import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeChipsComponent } from './liste-chips/liste-chips.component';
import { StatistiqueGlucideMaxComponent } from './statistique-glucide-max/statistique-glucide-max.component';
import { StatistiqueLipideMoyenneComponent } from './statistique-lipide-moyenne/statistique-lipide-moyenne.component';


const routes: Routes = [
  { path: 'acceuil', component: ListeChipsComponent },
  { path: 'lipidesMoyenne', component: StatistiqueLipideMoyenneComponent},
  { path: 'glucidesMaximal', component: StatistiqueGlucideMaxComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
