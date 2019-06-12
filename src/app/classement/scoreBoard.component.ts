import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-score",
  templateUrl: "./scoreBoard.component.html",
  styleUrls: ["./scoreBoard.component.css"]
})
export class ScoreComponent implements OnInit {
  disabledRun = false;
  results = [];
  startMatch() {
    axios.get("http://localhost:3000/api/match/create").then(res => {
      this.disabledRun = false;
      this.results = [...res.data.result[0].scoreBoard];
      console.log(res.data.result[0].week);
      const scoreBoard = {
        week: res.data.result[0].week,
        scoreBoard: this.results
      };
      localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
    });
  }
  ngOnInit() {
    const scoreBoard = localStorage.getItem("scoreBoard");
    console.log(scoreBoard);
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
