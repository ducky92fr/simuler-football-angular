import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav/navigation.component";
import { HomeComponent } from "./home/home.component";
import { ScoreComponent } from "./classement/scoreBoard.component";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "score", component: ScoreComponent }
];
@NgModule({
  declarations: [AppComponent, NavBarComponent, HomeComponent, ScoreComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
