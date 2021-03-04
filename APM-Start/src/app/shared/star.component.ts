import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
       this.starWidth = this.rating * 75 / 5 ;
    }

    onClick(): void {
    const starRating = this.rating.toString();
    console.log(starRating);
    this.ratingClicked.emit(`The Rating ${this.rating} was clicked`);
    }
}
