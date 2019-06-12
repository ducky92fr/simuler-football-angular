import { Component } from "@angular/core";
import { Team } from "./Team";
import axios from "axios";
import { error } from "util";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  message = "";
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
  deleteTeam(index) {
    console.log(index);
    this.teams.splice(index, 1);
  }
  createLeague() {
    const arrayTeam = this.teams.map(team => team.Name);
    axios
      .post("http://localhost:3000/api/league/create", { arrayTeam: arrayTeam })
      .then(res => {
        const scoreBoard = {
          week: res.data.result.week,
          scoreBoard: [...res.data.result.scoreBoard]
        };
        this.message = "League created";
        localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
      })
      .catch(err => console.log(err));
  }
}
