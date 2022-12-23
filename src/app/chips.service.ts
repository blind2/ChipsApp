import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chips } from './chips';
import { Observable } from 'rxjs';
import { StatistiqueLipideMoyenne } from './statistique-lipide-moyenne';
import { StatistiqueGlucideMax } from './statistique-glucide-max';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChipsService {

  chipsUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getChips(): Observable<Chips[]> {
    return this.http.get<Chips[]>(this.chipsUrl + 'chips');  
  }

  deleteChips(id: string): Observable<Chips> {
    return this.http.delete<Chips>(this.chipsUrl + 'chips/' + id, httpOptions);
  }

  updateChips(chips: Chips): Observable<any> {
    const id = chips._id;
    return this.http.put<Chips>(this.chipsUrl + 'chips/' + id, chips, httpOptions);
  }

  addChips(chips: Chips): Observable<Chips> {
    return this.http.post<Chips>(this.chipsUrl + 'chips', chips, httpOptions);
}

getLipidesParMarque():Observable<StatistiqueLipideMoyenne[]>{
  return this.http.get<StatistiqueLipideMoyenne[]>(this.chipsUrl + 'statistiques/moyenne-lipides-par-marque')
}

getMaximumGlucideParMarque():Observable<StatistiqueGlucideMax[]>{
  return this.http.get<StatistiqueGlucideMax[]>(this.chipsUrl + 'statistiques/max-glucides-par-marque')
}

getCroustilleParNom(nom:string): Observable<Chips[]> {
  return this.http.get<Chips[]>(this.chipsUrl + 'chips/nom/'+ nom);  
}

getCroustilleParID(id:string): Observable<Chips[]> {
  return this.http.get<Chips[]>(this.chipsUrl + 'chips/id/'+ id);  
}

getCroustilleParMarque(marque:string): Observable<Chips[]> {
  return this.http.get<Chips[]>(this.chipsUrl + 'chips/marque/'+ marque);  
}

login(nomUtilisateur: string, motDePasse: string) {
  return this.http.post(this.chipsUrl+'users/login', { nomUtilisateur: nomUtilisateur, motDePasse: motDePasse }, { withCredentials: false });
}

getInfosUtilisateur(): Observable<any[]> {
  return this.http.get<any[]>(this.chipsUrl+'users', { withCredentials: true });
}

} 
