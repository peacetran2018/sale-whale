import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TeamsComponent } from './components/teams/teams.component'

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'teams',
        component: TeamsComponent
      },
      { path: '', redirectTo: 'teams', pathMatch: 'full' },
      { path: '**', redirectTo: 'teams', pathMatch: 'full' }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
