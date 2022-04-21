import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from "../../services/car-service.service";
import { Observable } from "rxjs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-cars-dashboard',
  templateUrl: './cars-dashboard.component.html',
  styleUrls: ['./cars-dashboard.component.css']
})
export class CarsDashboardComponent implements OnInit {

  myArray: Car[] = [];


  constructor(private carService: CarService) { }


  ngOnInit() {
    this.getCars();
  }

  // CRUD Methods Implementation

  getCars() {

    this.carService.getAll().subscribe(data => {

      this.myArray = data;
    }
    )
  }

  deleteCar(id: number) {

    this.carService.delete(id).subscribe(
      () => {
        this.myArray = this.myArray.filter
          (carIterator => carIterator.id != id)
      })
  }



}
