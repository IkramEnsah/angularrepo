import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Car } from "../models/car";
import { Observable } from "rxjs";
//import { AddNewCar } from "../models/add-new-car";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  API_ON_JSON_SERVER_URL = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {
  }

  // CRUD Implementation

  getAll() {

    return this.http.get<Car[]>(this.API_ON_JSON_SERVER_URL);

  }

  delete(id: Number) {

    return this.http.delete(`${this.API_ON_JSON_SERVER_URL}/${id}`);

  }

  //post(cars: any) {

  // return this.http.get<Car>(this.API_ON_JSON_SERVER_URL, cars);

  // }
  post(cars: any) {
    return this.http.post<any>(this.API_ON_JSON_SERVER_URL, cars).pipe(map((res: any) => { return res; }))


  }
}