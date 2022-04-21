import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from "../../services/car-service.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }



}
