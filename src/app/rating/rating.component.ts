import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating = 0;
  @Input() numOfReviews = 0;

  addReview = () => {
    this.numOfReviews += 1;
    this.addReview = () => {};
  }

  onClick(ratingValue){
    this.rating = ratingValue;
    this.addReview();
  }

}
