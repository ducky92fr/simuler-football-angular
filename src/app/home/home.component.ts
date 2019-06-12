import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  teams = [
    "Barcelone",
    "Chelsea",
    "ManU",
    "ManC",
    "RealMadrid",
    "PSG",
    "Arsenal",
    "Lyon"
  ];
  addTeam() {
    this.teams.push("1");
  }
}
