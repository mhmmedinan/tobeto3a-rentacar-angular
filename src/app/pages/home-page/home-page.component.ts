import { Component } from '@angular/core';
import { ModelListGroupComponent } from '../../features/components/models/model-list-group/model-list-group.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ModelListGroupComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
