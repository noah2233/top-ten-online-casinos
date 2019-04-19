import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'advertising-disclosure',
  templateUrl: './advertising-disclosure.component.html',
  styleUrls: ['./advertising-disclosure.component.css']
})
export class AdvertisingDisclosureComponent implements OnInit {
  showAdvertisingDisclosure: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleAdvertisingDisclosure() {
    this.showAdvertisingDisclosure = !this.showAdvertisingDisclosure;
  }

}
