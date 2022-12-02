import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppService } from '../app.service';
import { GenderComponent } from './gender.component';

jest.mock('../app.service');

describe('GenderComponent', () => {
  let component: GenderComponent;
  let fixture: ComponentFixture<GenderComponent>;
  let service: AppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GenderComponent],
      providers: [provideMockStore(), AppService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(GenderComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(AppService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
