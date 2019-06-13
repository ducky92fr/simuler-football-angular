import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-final",
  templateUrl: "./playoff.component.html",
  styleUrls: ["./playoff.component.css"]
})
export class FinalComponent implements OnInit {
  eightTeams = {
    teams: [
      ["Team 1", "Team 2"],
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"]
    ],
    results: [
      [
        /* WINNER BRACKET */
        [
          [1, 2], //match 1
          [3, 4], //match 2
          [5, 6], //match 3
          [7, 8]
        ], //match 4
        [
          [9, 1], //match 5
          [8, 2]
        ], // match 6
        [[1, 3]] //match 7
      ]
    ]
  };
  final = [];

  ngOnInit() {
    const matchs = localStorage.getItem("matchs");
    if (matchs) {
      const parseMatchs = JSON.parse(matchs).sort((a, b) => a.week - b.week);
      this.final = [...parseMatchs.slice(parseMatchs.length - 3)];
      //update teams array and quarter final
      for (let i = 0; i < 4; i++) {
        this.eightTeams.teams[i][0] = this.final[0].matchs[i][0].team.nom;
        this.eightTeams.teams[i][1] = this.final[0].matchs[i][1].team.nom;
        this.eightTeams.results[0][0][i][0] = this.final[0].matchs[i][0].but;
        this.eightTeams.results[0][0][i][1] = this.final[0].matchs[i][1].but;
      }
      //swap to make sure the bracket works
      const storeTeam = [...this.eightTeams.teams[1]];
      this.eightTeams.teams[1] = [...this.eightTeams.teams[2]];
      this.eightTeams.teams[2] = [...storeTeam];

      const storeScore = [...this.eightTeams.results[0][0][1]];
      this.eightTeams.results[0][0][1] = [...this.eightTeams.results[0][0][2]];
      this.eightTeams.results[0][0][2] = [...storeScore];
      //update semi final
      for (let i = 0; i < 2; i++) {
        this.eightTeams.results[0][1][i][0] = this.final[1].matchs[i][0].but;
        this.eightTeams.results[0][1][i][1] = this.final[1].matchs[i][1].but;
      }
      //update final
      this.eightTeams.results[0][2][0][0] = this.final[2].matchs[0][0].but;
      this.eightTeams.results[0][2][0][1] = this.final[2].matchs[0][1].but;

      const jqueryFunction = () => {
        $(".demo").bracket({
          skipGrandFinalComeback: true,
          skipConsolationRound: true,
          init: this.eightTeams
        });
      };
      jqueryFunction();
    }
  }
}
