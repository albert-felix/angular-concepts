import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'assignment';
  displayName: boolean = true;
  names: string[] = ["Albert", "Felix", "Kavin", "Kumar"];
  accountNumbers: number[] = [3216654789, 4776519873, 3577869854, 5874632554];
  animal: string = 'cat';
  twoWay: any;
  lowerCase: any;
  upperCase: any;

  constructor(){  }

  toggleDisplay(){
    this.displayName = !this.displayName;
  }

  changeImage(e: string){
    this.animal = e.toLowerCase();
  }

  changeCase(e: string){
    this.lowerCase = e.toLowerCase();
    this.upperCase = e.toUpperCase();
  }
}
