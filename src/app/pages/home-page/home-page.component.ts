import { Component } from '@angular/core';
import { ModelListGroupComponent } from '../../features/components/models/model-list-group/model-list-group.component';
import { BrandListGroupComponent } from '../../features/components/brands/brand-list-group/brand-list-group.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ModelListGroupComponent,BrandListGroupComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
