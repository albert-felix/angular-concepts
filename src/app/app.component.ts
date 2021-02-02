import { Component, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import {CarDetailsComponent} from './car-details/car-details.component'

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
  twoWay: string;
  lowerCase: string;
  upperCase: string;
  carDetails = [
    {
      index: '1',
      name: 'Maruti Suzuki Swift',
      fuel: 'Petrol',
      body: 'Hatchback',
      transmission: 'Manual',
      seating: '5',
      mileage: '18 kmpl'
    },
    {
      index: '2',
      name: 'Volkswagen Polo',
      fuel: 'Petrol',
      body: 'Hatchback',
      transmission: 'Manual',
      seating: '5',
      mileage: '16 kmpl'
    },
    {
      index: '3',
      name: 'Honda City',
      fuel: 'Petrol',
      body: 'Sedan',
      transmission: 'Manual',
      seating: '5',
      mileage: '17 kmpl'
    },
    {
      index: '4',
      name: 'Hyundai Verna',
      fuel: 'Diesel',
      body: 'Sedan',
      transmission: 'Automatic',
      seating: '5',
      mileage: '15 kmpl'
    },
  ]

  constructor(private modalService: NgbModal){  }

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

  open(i: number){
    const modalRef = this.modalService.open(CarDetailsComponent);
    modalRef.componentInstance.details = this.carDetails[i];
  }

}
