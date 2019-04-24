import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as pages from '@core/consts/pages';
import { NavItem } from '@core/interface';
@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  public toggleNavbar = true;

  navItems: NavItem[] = [
    { name: 'Top 10 Casinos', link: '/' },
    { name: 'Reviews', link: '/' + pages.casinoReviews },
    { name: 'Articles', link: '/' + pages.articles },
    { name: 'Slots', link: '/' + pages.slots },
    { name: 'Blackjack', link: '/' + pages.blackjack },
    { name: 'Roulette', link: '/' + pages.roulette },
    { name: 'Live Casino', link: '/' + pages.liveCasino },
  ];

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  isActive(navItem: NavItem) {
    return this._router.url.toLowerCase() === navItem.link.toLowerCase() ? true : false;
  }
}
