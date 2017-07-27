import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold:number = 0;

  addGold(x:number) {
    this.gold += x;
    console.log("gold is now", this.gold)
  }
}
