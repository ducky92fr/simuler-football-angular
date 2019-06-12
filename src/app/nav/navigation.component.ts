import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navigation.component.html"
})
export class NavBarComponent {
  navMenu = false;
  toggleMenu() {
    this.navMenu = !this.navMenu;
  }
}
