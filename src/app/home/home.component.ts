import { Component } from "@angular/core";
import { Team } from "./Team";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  teams = [
    new Team("Barcelone"),
    new Team("Chelsea"),
    new Team("ManU"),
    new Team("ManC"),
    new Team("RealMadrid"),
    new Team("PSG"),
    new Team("Arsenal"),
    new Team("Lyon")
  ];
  addTeam() {
    this.teams.push(new Team(""));
  }
  create() {
    console.log(this.teams);
  }
}
