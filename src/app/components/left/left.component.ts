import { Component, EventEmitter, Output, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { AddressService } from '../../services/address.service';
import { FooterComponent } from "../footer/footer.component";
import { BetterLoggerService, MinimalLogger } from '../../services/logger.service';
import { CommonModule } from '@angular/common';
import { Indirizzo } from '../../models/address.dto';

@Component({
    selector: 'app-left',
    standalone: true,
    templateUrl: './left.component.html',
    styleUrl: './left.component.scss',
    // providers: [
    //   {
    //     provide: MinimalLogger,
    //     useClass: BetterLoggerService
    //   }
    // ],
    imports: [FormsModule, FooterComponent, CommonModule]
})
export class LeftComponent {


  addressService = inject( AddressService);
  private logger = inject( MinimalLogger);
  constructor(){

  }

  //@Output() indirizzoRicercato = new EventEmitter<{lat: number, lng: number, label: string}>();
  indirizzoRicercato = output<Indirizzo>();
 


  async onSearchAddress() {
    this.addressService.ricercaIndirizzo();

    const provider = new OpenStreetMapProvider();
    const results = await provider.search({ query: this.addressService.indirizzoDiRicerca });
    const result = results[0];
    this.indirizzoRicercato.emit({lat: result.y, lng: result.x, label: result.label});
    
    this.logger.log('Pulsante premuto');
  }


  onClearMarker() {
    this.addressService.pulisciListaIndirizziRicercati();
    }
}
