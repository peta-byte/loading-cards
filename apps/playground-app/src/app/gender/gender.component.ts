import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphQLResponse } from '@graphql-playground/api-interfaces';
import { IonModal } from '@ionic/angular';
import { lastValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'graphql-playground-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
})
export class GenderComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  gender$: Observable<GraphQLResponse> = this.http.get<GraphQLResponse>('/api/gender')

  gender: string[] = [];
  male = 0;
  female = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getGender()
  }

  getGender() {
    lastValueFrom(this.gender$).then((res) => {
      this.gender = res.data.gender?.gender ?? []
      this.male = this.gender?.filter((g) => g === 'male')?.length
      this.female = this.gender?.filter((g) => g === 'female')?.length
    })
  }

  cancel(): void {
    this.modal.dismiss(null, 'cancel');
  }
}
