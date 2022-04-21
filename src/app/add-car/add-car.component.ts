import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from '../services/car-service.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { compileClassMetadata } from '@angular/compiler';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  formValue !: FormGroup;
  car!: Car;

  constructor(private formBuilder: FormBuilder, private carService: CarService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      description: [''],
      address: [''],
      brand: [''],
      model: [''],
      modelYear: [''],
      issuance: [''],
      mileage: [''],
      fuel: [''],
      color: [''],
      numberDoors: [''],
      horsPower: [''],
      price: [''],
      picture: ['']
    });
  }

  // postCar() {
  //    this.carService.post(this.myCar)
  //     .subscribe((carIterator) => {
  //      this.myArray = [carIterator, ...this.myArray]

  //   })
  //}
  addCarDetails() {

    this.car.id = this.formValue.value.id;
    this.car.description = this.formValue.value.description;
    this.car.address = this.formValue.value.address;
    this.car.brand = this.formValue.value.brand;
    this.car.model = this.formValue.value.model;
    this.car.modelYear = this.formValue.value.modelYear;
    this.car.issuance = this.formValue.value.inssuance;
    this.car.mileage = this.formValue.value.mileage;
    this.car.fuel = this.formValue.value.fuel;
    this.car.color = this.formValue.value.color;
    this.car.numberDoors = this.formValue.value.numberDoors;
    this.car.horsPower = this.formValue.value.horsPower;
    this.car.price = this.formValue.value.price;
    this.car.picture = this.formValue.value.picture;

    this.carService.post(this.car).subscribe({
      next: res => {
        console.log(res);
        alert("Car Added Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.carService.getAll();
      },
      error: err => {
        console.log(err);
        alert("Car Added Failure")
      },
      complete: () => {
        console.log('completed');
      }
    });
  }
}
