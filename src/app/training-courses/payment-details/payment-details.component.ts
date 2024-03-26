import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class PaymentDetailsComponent implements OnInit {
  @Input() courseFees: any = {};

  constructor() {}

  ngOnInit() {}
}
