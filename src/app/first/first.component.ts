import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-first',
  imports: [HomeComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

}
