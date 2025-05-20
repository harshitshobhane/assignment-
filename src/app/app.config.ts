import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { CategoryService } from './services/category.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    CategoryService
  ]
};
