import { Component, OnInit } from '@angular/core';
import * as _pages from '@core/consts/pages';

@Component({
  selector: 'site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.css']
})
export class SiteFooterComponent implements OnInit {
  get pages() {
    return _pages;
  }

  constructor() { }

  ngOnInit() {
  }

}
