import { Component, inject } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  addressService = inject(AddressService);


}
