import { LocaisInfoComponent } from './componets/locais-info/locais-info.component';
import { LocaisListComponent } from './componets/locais-list/locais-list.component';
import { EpisodioInfoComponent } from './componets/episodio-info/episodio-info.component';
import { EpisodioListComponent } from './componets/episodio-list/episodio-list.component';
import { PersoInfoComponent } from './componets/perso-info/perso-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersoListComponent } from './componets/perso-list/perso-list.component';

const routes: Routes = [
  {
    path:"",
    component:PersoListComponent
  },
  {
    path:"character/:id",
    component:PersoInfoComponent
  },
  {
    path:"episodios",
    component:EpisodioListComponent
  },
  {
    path:"episodios/episodio/:id",
    component:EpisodioInfoComponent
  },
  {
    path:"locais",
    component:LocaisListComponent
  },
  {
    path:"locais/local/:id",
    component:LocaisInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
