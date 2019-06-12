import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-score",
  templateUrl: "./scoreBoard.component.html",
  styleUrls: ["./scoreBoard.component.css"]
})
export class ScoreComponent implements OnInit {
  disabledRun = false;
  results = [];
  startMatch() {
    axios
      .get("http://localhost:3000/api/match/create")
      .then(res => {
        console.log(res);
        this.disabledRun = false;
        this.results = [...res.data.finalWeek[0].scoreBoard];

        const scoreBoard = {
          week: res.data.finalWeek[0].week,
          scoreBoard: this.results
        };
        const matchs = [...res.data.matchs];
        localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
        localStorage.setItem("matchs", JSON.stringify(matchs));
      })
      .catch(err => console.log(err));
  }
  ngOnInit() {
    const scoreBoard = localStorage.getItem("scoreBoard");
    console.log(JSON.parse(scoreBoard).scoreBoard);
    if (scoreBoard) {
      this.results = [...JSON.parse(scoreBoard).scoreBoard];
      if (JSON.parse(scoreBoard).week !== 0) {
        this.disabledRun = false;
      } else {
        this.disabledRun = true;
      }
    } else {
      this.disabledRun = false;
    }
  }
}
