import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private service: ApiService) {
    this.getAllProducts();
  }

  public allProducts: any[] = [];

  getAllProducts() {
    this.service.getAllProducts().subscribe({
      next: (data: any) => {
        this.allProducts = data;
      },
      error: (err: any) => console.log(err),
    });
  }
}
