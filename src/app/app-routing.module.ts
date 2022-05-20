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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
