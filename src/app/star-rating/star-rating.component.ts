import { Component, OnInit } from '@angular/core';
import {RatingModule} from "ngx-rating";

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  ngOnInit(){
  }

reviews=[ {rating:5,review:`Excellent`},
          {rating:4,review:`It si repeating twice beacause i use two values in array`}
];
  constructor(){
  }

}

