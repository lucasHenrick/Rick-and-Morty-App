import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './componets/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LogoAlterComponent } from './componets/logo-alter/logo-alter.component';
import { PersoCardComponent } from './componets/perso-card/perso-card.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PersoListComponent } from './componets/perso-list/perso-list.component';
import { PersoInfoComponent } from './componets/perso-info/perso-info.component';
import { FooterComponent } from './componets/footer/footer.component';
import { EpisodioCardComponent } from './componets/episodio-card/episodio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LogoAlterComponent,
    PersoCardComponent,
    PersoListComponent,
    PersoInfoComponent,
    FooterComponent,
    EpisodioCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
