import { Component, OnInit } from '@angular/core';
import { Usr } from '@graphql-playground/api-interfaces';
import { AppService } from '../app.service';

@Component({
  selector: 'graphql-playground-nationalities',
  templateUrl: './nationalities.component.html',
  styleUrls: ['./nationalities.component.scss'],
})
export class NationalitiesComponent implements OnInit {
  nationalities: string[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getUsers$().subscribe(this.getNationalities.bind(this));
  }

  getNationalities(users: Usr[]) {
    if (users) {
      this.nationalities = users.map((user: Usr) => user.nat)
    }
  }
}
