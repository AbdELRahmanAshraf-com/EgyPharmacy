import { Component, Input, OnInit } from '@angular/core';
export interface ItemInterface {
  Name: string;
  Price: number;
}

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
})
export class ElementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() item!: ItemInterface;

  itemReaction = {
    likesCount: 20,
    isLiked: true,
    isFavourie: false,
  };
}
