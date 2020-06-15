import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styles: [
  ]
})
export class ProdCardComponent implements OnInit {

  @Input() item: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
