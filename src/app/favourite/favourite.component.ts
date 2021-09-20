import { Component, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent {
  @Input() isFavourite = false;

  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}
