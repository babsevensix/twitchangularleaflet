import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BabButtonDirective } from './bab-button.directive';
import { LeafletDirective } from './directives/leaflet.directive';
import { TopComponent } from "./components/top/top.component";
import { LeftComponent } from "./components/left/left.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LeafletDirective, TopComponent, LeftComponent]
})
export class AppComponent {

  title = 'angularleaflet';

  centraLaMappa: {lat: number, lng: number} | undefined;

  onIndirizzoRicercato(posizione: {lat: number, lng: number, label: string}) {
    this.centraLaMappa = {lat: posizione.lat, lng: posizione.lng};
  }
}
