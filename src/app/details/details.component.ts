import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  allMatchs = [];
  matchToDisplay = [];

  displayDetails(val: string) {
    this.matchToDisplay = [...this.allMatchs[val].matchs];
  }
  ngOnInit() {
    const allMatchs = localStorage.getItem("matchs");
    if (allMatchs) {
      this.allMatchs = JSON.parse(allMatchs).sort((a, b) => a.week - b.week);
    }
    return;
  }
}
