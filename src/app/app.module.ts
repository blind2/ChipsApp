import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeChipsComponent } from './liste-chips/liste-chips.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { EnteteComponent } from './entete/entete.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ChipsService } from './chips.service';
import {MatTableModule} from '@angular/material/table';
import { MatLineModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule }   from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ModifierChipsFormComponent } from './modifier-chips-form/modifier-chips-form.component';
import { SupprimerChipsFormComponent } from './supprimer-chips-form/supprimer-chips-form.component';
import { StatistiqueGlucideMaxComponent } from './statistique-glucide-max/statistique-glucide-max.component';
import { StatistiqueLipideMoyenneComponent } from './statistique-lipide-moyenne/statistique-lipide-moyenne.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeChipsComponent,
    EnteteComponent,
    ModifierChipsFormComponent,
    SupprimerChipsFormComponent,
    StatistiqueGlucideMaxComponent,
    StatistiqueLipideMoyenneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatLineModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [ChipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
