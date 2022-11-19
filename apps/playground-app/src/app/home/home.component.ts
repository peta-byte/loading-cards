import { Component, OnInit } from '@angular/core';
import { Usr } from '@graphql-playground/api-interfaces';
import { AppService } from '../app.service';

@Component({
  selector: 'graphql-playground-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: Usr[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getUsers$().subscribe((users) => (this.users = users ?? []));
    this.appService.loadUsers();
  }
}
