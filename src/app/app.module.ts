import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav/navigation.component";
import { HomeComponent } from "./home/home.component";
import { ScoreComponent } from "./classement/scoreBoard.component";
import { FinalComponent } from "./playoff/playoff.component";
import { DetailsComponent } from "./details/details.component";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "score", component: ScoreComponent },
  { path: "final", component: FinalComponent },
  { path: "details", component: DetailsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ScoreComponent,
    FinalComponent,
    DetailsComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
