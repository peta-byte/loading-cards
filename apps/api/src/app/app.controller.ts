import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getUser() {
    return this.appService.getUser();
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('gender')
  getGender() {
    return this.appService.getGender();
  }

  @Get('demographics')
  getDemographics() {
    return this.appService.getDemographics();
  }

  @Get('nationalities')
  getNationalities() {
    return this.appService.getNationalities();
  }
}
