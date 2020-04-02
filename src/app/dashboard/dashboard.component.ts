import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Pet {
  id?: number;
  name: string;
  kindOfAnimal: string;
  age: number;
  sex: string;
  breed: string;
  dateOfEntry: string;
  weight: number;
  wool: string;
  color: string;
  image_data: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Pet[]>('http://localhost:3000/pet')
      .subscribe(pets => {
          this.pets = pets;
          console.log(pets);
        }
      );
  }

}
