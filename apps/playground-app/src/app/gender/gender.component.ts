import { Component, OnInit } from '@angular/core';
import { Usr } from '@graphql-playground/api-interfaces';
import { AppService } from '../app.service';

@Component({
  selector: 'graphql-playground-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
})
export class GenderComponent implements OnInit {
  gender: string[] = [];
  male = 0;
  female = 0;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getUsers$().subscribe(this.getGender.bind(this));
  }

  getGender(users: Usr[]) {
    if (users) {
      this.gender = users.map((user: Usr) => user.gender)
      this.male = this.gender.filter((g) => g.toLowerCase() === 'male')?.length
      this.female = this.gender.filter((g) => g.toLowerCase() === 'female')?.length
    }
  }
}
