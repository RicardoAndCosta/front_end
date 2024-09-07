import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavigationComponent } from './components/template/navigation/navigation.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule
  ],
  templateUrl: 'app.component.html'
})

export class AppComponent {
}
