import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BabButtonDirective } from './bab-button.directive';
import { LeafletDirective } from './directives/leaflet.directive';
import { TopComponent } from "./components/top/top.component";
import { LeftComponent } from "./components/left/left.component";
import { AddressService } from './services/address.service';
import { BetterLoggerService, LoggerService, MinimalLogger, UserService } from './services/logger.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LeafletDirective, TopComponent, LeftComponent],
    providers:[
      
      // {
      //   provide: MinimalLogger,
      //   useClass: LoggerService
      // },
      
    ]

})
export class AppComponent {

  //addressService = inject(AddressService);
  logService = inject(MinimalLogger);

  title = 'angularleaflet';

  centraLaMappa: {lat: number, lng: number} | undefined;

  onIndirizzoRicercato(posizione: {lat: number, lng: number, label: string}) {
    this.centraLaMappa = {lat: posizione.lat, lng: posizione.lng};
    this.logService.log('Inidirzzo ricercato')
  }
}
