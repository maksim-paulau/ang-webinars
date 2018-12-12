import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.appTitle.nativeElement.innerHTML = 'Shop';
  }
}
