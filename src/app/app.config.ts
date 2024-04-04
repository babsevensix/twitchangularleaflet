import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BetterLoggerService, LoggerService, MinimalLogger, UserService } from './services/logger.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: UserService,
      useValue: {
        userName: 'From provider'
      },
    },
      { provide: 'USE_FAKE', useValue: false},
      {
        provide: MinimalLogger,
        useFactory: (USE_FAKE: boolean, userService: UserService) => USE_FAKE ? new LoggerService() : new BetterLoggerService( userService, USE_FAKE,),
        deps:['USE_FAKE', UserService]
      }
    
  ]
};
