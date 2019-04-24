import { Component, OnInit } from '@angular/core';

import { ResizeEvent } from 'angular-resizable-element';
@Component({
  selector: 'casino-reviews',
  templateUrl: './casino-reviews.component.html',
  styleUrls: ['./casino-reviews.component.css']
})
export class CasinoReviewsComponent implements OnInit {
  resizeStyle: any = {
    width: `100%`,
    height: `31px`
  };

  constructor() { }

  ngOnInit() {
  }

  onResizeEnd(event: ResizeEvent): void {
    this.resizeStyle = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
}
