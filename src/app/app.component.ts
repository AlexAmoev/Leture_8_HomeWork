import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, HomeComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Leqture_8_HomeWork';

  constructor(public service: ApiService) {
    this.loaderInfo();
  }

  public isLoading: any;

  loaderInfo() {
    this.service.loader.subscribe((data: any) => {
      this.isLoading = data;
    });
  }
}
