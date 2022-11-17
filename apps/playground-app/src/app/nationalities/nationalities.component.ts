import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphQLResponse } from '@graphql-playground/api-interfaces';
import { IonModal } from '@ionic/angular';
import { lastValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'graphql-playground-nationalities',
  templateUrl: './nationalities.component.html',
  styleUrls: ['./nationalities.component.scss'],
})
export class NationalitiesComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  nationalities$: Observable<GraphQLResponse> = this.http.get<GraphQLResponse>('/api/nationalities')

  nationalities: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getNationalities()
  }

  getNationalities() {
    lastValueFrom(this.nationalities$).then((res) => {
      this.nationalities = res.data.nationalities?.nationalities ?? []
    })
  }

  cancel(): void {
    this.modal.dismiss(null, 'cancel');
  }
}
