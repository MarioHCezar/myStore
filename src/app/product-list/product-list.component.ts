import { Component } from '@angular/core';

import { products } from '../products';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  // imports: [MatExpansionModule],
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will receive a message when the product is on sale');
  }
  panelOpenState = false;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
