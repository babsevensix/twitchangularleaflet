import { Injectable } from '@angular/core';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { MinimalLogger } from './logger.service';
import { Indirizzo } from '../models/address.dto';

@Injectable({providedIn: 'root'})
export class AddressService {
    constructor(private logger: MinimalLogger) { 
        console.log(' Address Service  ');
    }
    
    indirizzoDiRicerca: string ='Milano';

    listaIndirizziRicercati:Indirizzo[] = [];


    private _indirizzoRicerca: Indirizzo | undefined;

    async ricercaIndirizzo() {

        const provider = new OpenStreetMapProvider();
        const results = await provider.search({ query: this.indirizzoDiRicerca });
        const result = results[0];
        //this.indirizzoRicercato.emit({lat: result.y, lng: result.x, label: result.label});
        this._indirizzoRicerca = {lat: result.y, lng: result.x, label: result.label};
        this.listaIndirizziRicercati.push({...this._indirizzoRicerca});
        this.logger.log(' Aggiunto indirizzo ' + result.label);
    }

    get IndirizzoRicercato() {
        return this._indirizzoRicerca;
    }

    pulisciListaIndirizziRicercati(): void{
        this.listaIndirizziRicercati = [];
    }
}