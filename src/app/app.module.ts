import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CadetComponent } from './pages/cadet/cadet.component';
import { PlayerComponent } from './components/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { StartingComponent } from './pages/starting/starting.component';
import { CadetProgramComponent } from './pages/cadet-program/cadet-program.component';
import { PilotProgramComponent } from './pages/pilot-program/pilot-program.component';
import { AstrounautProgramComponent } from './pages/astrounaut-program/astrounaut-program.component';
import { RulesComponent } from './pages/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CadetComponent,
    PlayerComponent,
    StartingComponent,
    CadetProgramComponent,
    PilotProgramComponent,
    AstrounautProgramComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
