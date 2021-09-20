import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() searchOutput = new EventEmitter<string>();
  search = '';
  constructor() {}

  ngOnInit(): void {
    this.inputHandler();
  }

  inputHandler() {
    this.searchOutput.emit(this.search);
    this.search = ''; //How ??!
  }

  clear(input: any) {
    this.inputHandler();
    input.value = '';
  }
}
