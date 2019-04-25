import { Component, OnInit } from '@angular/core';

import { forEachRight } from 'lodash';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bonusLastUpdate: object;
  constructor() { }

  ngOnInit() {
    this.initBonusLastUpdate();
  }

  initBonusLastUpdate() {
    const timeArray: Date[] =
      [this.getDateCustomTime(0),
      this.getDateCustomTime(6),
      this.getDateCustomTime(12),
      this.getDateCustomTime(18)];

    const d: Date = new Date();
    const that = this;
    forEachRight(timeArray, function (date: Date) {
      const diff: number = d.getTime() - date.getTime();
      if (diff > 0) {
        that.bonusLastUpdate = that.getTimeDiffrence(diff);
        // end the loop
        return false;
      }
    });
  }

  getDateCustomTime(hour: number) {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, 0, 0);
  }

  getTimeDiffrence(diff: number) {
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return { hours: hours, minutes: minutes };
  }
}
