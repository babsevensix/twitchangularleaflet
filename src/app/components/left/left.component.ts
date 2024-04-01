import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss'
})
export class LeftComponent {

  @Output() indirizzoRicercato = new EventEmitter<{lat: number, lng: number, label: string}>();

  textSearch: string = '';


  async onSearchAddress() {
    

    const provider = new OpenStreetMapProvider();
    const results = await provider.search({ query: this.textSearch });
    const result = results[0];
    this.indirizzoRicercato.emit({lat: result.y, lng: result.x, label: result.label});
  }
}
