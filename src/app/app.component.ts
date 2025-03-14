import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [FirstComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Leqture_8_HomeWork';
}
