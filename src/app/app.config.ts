import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TrimmerPipe } from './trimmer.pipe';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), TrimmerPipe]
};
