import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CadetComponent } from './pages/cadet/cadet.component';
import { StartingComponent } from './pages/starting/starting.component';
import { CadetProgramComponent } from './pages/cadet-program/cadet-program.component';
import { PilotProgramComponent } from './pages/pilot-program/pilot-program.component';
import { AstrounautProgramComponent } from './pages/astrounaut-program/astrounaut-program.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'cadet', component: CadetComponent},
  {path:'starting', component: StartingComponent},
  {path:'cadet-program', component: CadetProgramComponent},
  {path:'pilot-program', component: PilotProgramComponent},
  {path:'astronaut-program', component: AstrounautProgramComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
