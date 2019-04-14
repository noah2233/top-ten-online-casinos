import { Component, OnInit } from '@angular/core';

import * as pages from '@core/consts/pages';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  public toggleNavbar = true;

  public get pages() {
    return pages;
  }

  constructor() { }

  ngOnInit() {
  }
}
