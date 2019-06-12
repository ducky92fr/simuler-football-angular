import { Component } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-score",
  templateUrl: "./scoreBoard.component.html",
  styleUrls: ["./scoreBoard.component.css"]
})
export class ScoreComponent {
  results = [];
  startMatch() {
    axios.get("http://localhost:3000/api/match/create").then(res => {
      console.log(res);
      this.results = [...res.data.result[0].scoreBoard];
    });
  }
}
