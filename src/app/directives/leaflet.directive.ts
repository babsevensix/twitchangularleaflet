import { Directive, ElementRef, Inject, Input, inject } from '@angular/core';
import L from 'leaflet';
import { AddressService } from '../services/address.service';

@Directive({
  selector: '[appLeaflet]',
  standalone: true
})
export class LeafletDirective {


  private addressService = inject(AddressService);

  @Input() set centerToMap(value:{lat: number, lng:number} | undefined){
    if (value){
      this.map.flyTo({...value}, 15);

      this.creaMarkers();
      
    }
  };

  private map: L.Map;

  private layerMarkerGroup: L.LayerGroup;

  constructor(elementRef: ElementRef) { 
    this.map = L.map(elementRef.nativeElement).setView([41.934441, 12.493692], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap, Tiles courtesy of Humanitarian OpenStreetMap Team'
    }).addTo(this.map);


    this.layerMarkerGroup = L.layerGroup();
    this.layerMarkerGroup.addTo(this.map);

  }

  private creaMarkers(): void{
    this.layerMarkerGroup.clearLayers();

    this.addressService.listaIndirizziRicercati.forEach(ir=>{
      L.marker({...ir}).addTo(this.layerMarkerGroup);
    })

    
  }

}
