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

  constructor(){  }

  toggleDisplay(){
    this.displayName = !this.displayName;
  }

  changeImage(e: Event){
    const animal = e.target as HTMLInputElement
    this.animal = animal.value.toLowerCase()
  }
}
