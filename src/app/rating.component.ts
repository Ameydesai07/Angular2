/**
 * Created by lt-117 on 20/6/17.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector:"rating",
  templateUrl:'rating.component.html',
  styles:[`
    .glyphicon-star {
      color: orange;
    }
  `]
})

export class RatingComponent {
  @Input('rating-value') rating = 0;
  @Input() numOfReviews = 0;
  onClick(ratingVal) {
    this.rating = ratingVal;
  }
}
