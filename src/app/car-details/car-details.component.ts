import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  @Input() details = {
    index: '',
    name: '',
    fuel: '',
    body: '',
    transmission: '',
    seating: '',
    mileage: ''
  };


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
