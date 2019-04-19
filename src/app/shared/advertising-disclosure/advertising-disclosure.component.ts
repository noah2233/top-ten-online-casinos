import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'advertising-disclosure',
  templateUrl: './advertising-disclosure.component.html',
  styleUrls: ['./advertising-disclosure.component.css']
})
export class AdvertisingDisclosureComponent implements OnInit {
  showAdvertisingDisclosure: boolean;
  contant =
    `<div class="title">advertising disclosure</div>
    <p class="body">
      This site is a free online resource that strives to offer helpful content and comparison features to its
      visitors.Please be advised that the operator of this site accepts advertising compensation from companies
      that appear on the site, and such compensation impacts the location and order in which the companies(and / or
        their products) are presented, and in some cases may also impact the rating that is assigned to them.To the
      extent that ratings appear on this site, such rating is determined by our subjective opinion and based on a
      methodology that aggregates our analysis of brand market share and reputation, each brand's conversion
      rates, compensation paid to us and general consumer interest.Company listings on this page DO NOT imply
      endorsement.Except as expressly set forth in our <a href = "javascript:void(0)">Terms of Use</a>,
      all representations and warranties regarding the information presented on this page are
      disclaimed.The information, including pricing, which appears on this site is subject to change at any time.
    </p>
    <a href="javascript:void(0)" (click)="toggleAdvertisingDisclosure()" class="btn btn-link got-it">got it</a>`;
  constructor() { }

  ngOnInit() {
  }

  toggleAdvertisingDisclosure() {
    this.showAdvertisingDisclosure = !this.showAdvertisingDisclosure;
  }

}
