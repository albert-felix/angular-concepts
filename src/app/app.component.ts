import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  displayName: boolean = true;
  names: string[];
  accountNumbers: number[];

  constructor(){
    this.names = ["Albert", "Felix", "Kavin", "Kumar"]
    this.accountNumbers = [3216654789, 4776519873, 3577869854, 5874632554]
  }

  toggleDisplay(){
    this.displayName = !this.displayName;
  }
}
