import { Directive, ElementRef, Input } from '@angular/core';
import L from 'leaflet';

@Directive({
  selector: '[appLeaflet]',
  standalone: true
})
export class LeafletDirective {


  @Input() set centerToMap(value:{lat: number, lng:number} | undefined){
    if (value){
      this.map.flyTo({...value}, 15);

      this.layerMarkerGroup.clearLayers();

      L.marker({...value}).addTo(this.layerMarkerGroup);
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

}
