import { Component } from "@angular/core";
import { Team } from "./Team";
import axios from "axios";

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
  nbTeams = this.teams.length < 9;
  addTeam() {
    this.teams.push(new Team(""));
    this.nbTeams = this.teams.length < 9;
  }
  deleteTeam(index) {
    console.log(index);
    this.teams.splice(index, 1);
    this.nbTeams = this.teams.length < 9;
  }
  createLeague() {
    const arrayTeam = this.teams.map(team => team.Name);
    if (arrayTeam.includes("")) {
      this.message = "Please make sure there are minimum 8 teams";
    } else {
      axios
        .post("http://localhost:3000/api/league/create", {
          arrayTeam: arrayTeam
        })
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
}
