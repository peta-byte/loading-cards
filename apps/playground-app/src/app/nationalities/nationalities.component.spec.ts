import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NationalitiesComponent } from './nationalities.component';
import { AppService } from '../app.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

jest.mock('../app.service');

describe('NationalitiesComponent', () => {
  let component: NationalitiesComponent;
  let fixture: ComponentFixture<NationalitiesComponent>;
  let service: AppService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NationalitiesComponent],
      providers: [provideMockStore(), AppService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(NationalitiesComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(AppService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
