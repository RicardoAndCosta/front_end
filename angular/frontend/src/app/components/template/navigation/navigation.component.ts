import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatListModule,
    MatSidenavModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
