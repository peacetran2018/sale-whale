import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './core/footer/footer.component';
import { TopbarComponent } from './core/topbar/topbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    TopbarComponent,
    SidebarComponent,
    TeamsComponent
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
