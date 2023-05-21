import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CadetComponent } from './pages/cadet/cadet.component';
import { StartingComponent } from './pages/starting/starting.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'cadet', component: CadetComponent},
  {path:'starting', component: StartingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
