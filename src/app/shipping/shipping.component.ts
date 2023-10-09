import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string; price: number }[]>;
  
  constructor(private cart: CartService) {}


  ngOnInit(): void {
    this.shippingCosts = this.cart.getShippingPrices();
  }
}
