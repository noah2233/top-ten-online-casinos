import { Component, OnInit } from '@angular/core';

import { ResizeEvent } from 'angular-resizable-element';

import { Review } from '@core/interface';
@Component({
  selector: 'casino-reviews',
  templateUrl: './casino-reviews.component.html',
  styleUrls: ['./casino-reviews.component.css']
})
export class CasinoReviewsComponent implements OnInit {
  isShowMoreRevies: boolean;
  _reviews: Review[] = [{
    casinoName: '32Red', description: `32Red is an online casino powered by the renowned software provider, Microgaming. This
  online casino has more than 500 games and a wide range of other great features. 32Red Casino
  is dedicated to providing high quality customer service with highly trained customer agents
  who are polite and ready to assist with all manner of queries.The gaming platform is
  reliable and the bonuses are best in class.All in all, 32Red has all of the features you
  will need to enjoy a rewarding online casino experience.`, link: ''
  }, {
    casinoName: '32Red', description: `32Red is an online casino powered by the renowned software provider, Microgaming. This
  online casino has more than 500 games and a wide range of other great features. 32Red Casino
  is dedicated to providing high quality customer service with highly trained customer agents
  who are polite and ready to assist with all manner of queries.The gaming platform is
  reliable and the bonuses are best in class.All in all, 32Red has all of the features you
  will need to enjoy a rewarding online casino experience.`, link: ''
  }, {
    casinoName: '32Red', description: `32Red is an online casino powered by the renowned software provider, Microgaming. This
  online casino has more than 500 games and a wide range of other great features. 32Red Casino
  is dedicated to providing high quality customer service with highly trained customer agents
  who are polite and ready to assist with all manner of queries.The gaming platform is
  reliable and the bonuses are best in class.All in all, 32Red has all of the features you
  will need to enjoy a rewarding online casino experience.`, link: ''
  }, {
    casinoName: '32Red', description: `32Red is an online casino powered by the renowned software provider, Microgaming. This
  online casino has more than 500 games and a wide range of other great features. 32Red Casino
  is dedicated to providing high quality customer service with highly trained customer agents
  who are polite and ready to assist with all manner of queries.The gaming platform is
  reliable and the bonuses are best in class.All in all, 32Red has all of the features you
  will need to enjoy a rewarding online casino experience.`, link: ''
  }, {
    casinoName: '32Red', description: `32Red is an online casino powered by the renowned software provider, Microgaming. This
  online casino has more than 500 games and a wide range of other great features. 32Red Casino
  is dedicated to providing high quality customer service with highly trained customer agents
  who are polite and ready to assist with all manner of queries.The gaming platform is
  reliable and the bonuses are best in class.All in all, 32Red has all of the features you
  will need to enjoy a rewarding online casino experience.`, link: ''
  }, {
    casinoName: '32Red', description: `32Red is an online casino powered by the renowned software provider, Microgaming. This
  online casino has more than 500 games and a wide range of other great features. 32Red Casino
  is dedicated to providing high quality customer service with highly trained customer agents
  who are polite and ready to assist with all manner of queries.The gaming platform is
  reliable and the bonuses are best in class.All in all, 32Red has all of the features you
  will need to enjoy a rewarding online casino experience.`, link: ''
  }, {
    casinoName: '32Red', description: `32Red is an online casino powered by the renowned software provider, Microgaming. This
  online casino has more than 500 games and a wide range of other great features. 32Red Casino
  is dedicated to providing high quality customer service with highly trained customer agents
  who are polite and ready to assist with all manner of queries.The gaming platform is
  reliable and the bonuses are best in class.All in all, 32Red has all of the features you
  will need to enjoy a rewarding online casino experience.`, link: ''
  }];

  resizeStyle: any = {
    width: `100%`,
    height: `31px`
  };

  get reviews(): Review[] {
    return this.isShowMoreRevies ? this._reviews : this._reviews.slice(0, 5);
  }

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

  showMoreReviews() {
    this.isShowMoreRevies = true;
  }
}
